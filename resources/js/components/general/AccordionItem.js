import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AccordionItem extends Component {
    toHtml(text){
        return {__html: text}
    }

    render() {
        const {id,title, body, idParent, expanded} = this.props;
        const heading = `heading${id}`;
        const collapse = `collapse${id}`;
        const show = expanded ? "collapse show" : "collapse";

        return (
                <div className="card">
                    <div className="card-header" id={heading}>
                        <h5 className="mb-0">
                            <button className="btn btn-link text-primary" type="button" data-toggle="collapse" data-target={`#${collapse}`} aria-expanded={expanded} aria-controls={collapse} dangerouslySetInnerHTML={this.toHtml(title)}>
                            </button>
                        </h5>
                    </div>

                    <div id={collapse} className={show} aria-labelledby={heading}
                         data-parent={`#${idParent}`}>
                        <div className="card-body" dangerouslySetInnerHTML={this.toHtml(body)}>
                        </div>
                    </div>
                </div>
        );
    }

    static defaultProps = {
        expanded: false
    };

    static propTypes = {
        id: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        idParent: PropTypes.string.isRequired,
        expanded: PropTypes.bool,
    }
}
export default AccordionItem;