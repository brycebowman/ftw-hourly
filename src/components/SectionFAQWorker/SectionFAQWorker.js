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
import css from './SectionFAQWorker.module.css';


const SectionFAQWorker = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
 <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} >
               <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className={css.accordion__button_top}>
                      <FormattedMessage id="SectionFAQWorker.Question1" />
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <FormattedMessage id="SectionFAQWorker.Answer1" />
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <FormattedMessage id="SectionFAQWorker.Question2" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <FormattedMessage id="SectionFAQWorker.Answer2" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  <FormattedMessage id="SectionFAQWorker.Question3" />
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
              <FormattedMessage id="SectionFAQWorker.Answer3" />
              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                <FormattedMessage id="SectionFAQWorker.Question4" />
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <FormattedMessage id="SectionFAQWorker.Answer4" />
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
              <AccordionItemButton>
              <FormattedMessage id="SectionFAQWorker.Question5"/>
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <FormattedMessage id="SectionFAQWorker.Answer5" />
          </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton>
            <FormattedMessage id="SectionFAQWorker.Question6"/>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
        <FormattedMessage id="SectionFAQWorker.Answer6" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
        </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
          <AccordionItemButton className={css.accordion__button_bottom}>
          <FormattedMessage id="SectionFAQWorker.Question7"/>
          </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
      <FormattedMessage id="SectionFAQWorker.Answer7" />
      </AccordionItemPanel>
  </AccordionItem>
              </Accordion>
        </div>
  );
};

SectionFAQWorker.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionFAQWorker.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionFAQWorker;
