import * as React from "react";
import BasicLayout from "../BasicLayout";
import { Container, WithStyles, withStyles } from "@material-ui/core";
import styles from "../../styles/page-content";
import ApiUtils from "../../../src/utils/ApiUtils";
import { Page } from "../../../src/generated/client/src";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import { DomElement } from "domhandler";

/**
 * Interface representing component properties
 */
interface Props extends WithStyles<typeof styles> {
  slug: string
}

/**
 * Interface representing component state
 */
interface State {
  page?: Page
  loading: boolean
  heroBanner?: React.ReactElement
}

/**
 * PostPage component
 */
class PostPage extends React.Component<Props, State> {

  /**
   * Constructor
   *
   * @param props component properties
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  /**
   * Component did mount life-cycle handler
   */
  public componentDidMount = async () => {
    this.setState({
      loading: true
    });

    const slugParts = this.props.slug.split("/");
    const slug = slugParts.pop() || slugParts.pop();
    if (!slug) {
      //TODO: handle error
      return;
    }

    const api = ApiUtils.getApi();
    const pages = await api.getWpV2Pages({ slug: [ slug ] });
    const page = pages[0];
    this.setState({
      page: page,
      loading: false
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    const pageHtmlSource = this.state.page && this.state.page.content ? this.state.page.content.rendered || "" : "";
    return (
      <BasicLayout>
        { this.state.heroBanner &&
          <div className={ classes.hero }>
            { this.state.heroBanner }
          </div>
        }
        <div className={ this.state.heroBanner ? classes.contentWithHero : classes.content }>
          <Container>
            <div className={ classes.htmlContainer }>
              { ReactHtmlParser(pageHtmlSource, { transform: this.transformContent }) }
            </div>
          </Container>
        </div>
      </BasicLayout>
    );
  }

  private getElementClasses = (node: DomElement): string[] => {
    const classString = node.attribs ? node.attribs.class : "";
    if (node.attribs && node.attribs.class) {
      return classString.split(" ");
    }

    return [];
  }

  private transformContent = (node: DomElement, index: number) => {
    const classNames = this.getElementClasses(node);
    if (classNames.indexOf("hero") > -1) {
      if (!this.state.heroBanner) {
        this.setState({
          heroBanner: convertNodeToElement(node, index, this.transformContent)
        });
      }
      return null;
    }

    return convertNodeToElement(node, index, this.transformContent);
  }
}

export default withStyles(styles)(PostPage);