import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';
import { NamedLink } from '../../components';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './Accordion.css';
import css from './SectionFAQManager.module.css';


const SectionFAQManager = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
         <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} classname={css.heading}>
                       <AccordionItem>
                          <AccordionItemHeading classname={css.heading}>
                              <AccordionItemButton className={css.accordion__button_top}>
                              <FormattedMessage id="SectionFAQManager.Question1" />
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <FormattedMessage id="SectionFAQManager.Answer1" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                          </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            <FormattedMessage id="SectionFAQManager.Question2" />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <FormattedMessage id="SectionFAQManager.Answer2" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <FormattedMessage id="SectionFAQManager.Question3" />
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <FormattedMessage id="SectionFAQManager.Answer3" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                      </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        <FormattedMessage id="SectionFAQManager.Question4" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <FormattedMessage id="SectionFAQManager.Answer4" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <FormattedMessage id="SectionFAQManager.Question5" />
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  <FormattedMessage id="SectionFAQManager.Answer5A" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                  <p></p>
                  <FormattedMessage id="SectionFAQManager.Answer5B" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <FormattedMessage id="SectionFAQManager.Question6" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <FormattedMessage id="SectionFAQManager.Answer6A" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                <p></p>
                <FormattedMessage id="SectionFAQManager.Answer6B" />
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton className={css.accordion__button_bottom}>
                  <FormattedMessage id="SectionFAQManager.Question7" />
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
              <FormattedMessage id="SectionFAQManager.Answer7" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
              </AccordionItemPanel>
          </AccordionItem>

                      </Accordion>
                </div>
  );
};

SectionFAQManager.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionFAQManager.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionFAQManager;
