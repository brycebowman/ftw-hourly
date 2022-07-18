import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { NamedLink } from '../../components';
import './Accordion.css';
import css from './SectionFAQLanding.module.css';

const SectionFAQLanding = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionFAQLanding.title" />
      </div>
      <div className={css.FAQsteps}>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={css.accordion__button_top}>
              <FormattedMessage id="SectionFAQLanding.Question0" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <FormattedMessage id="SectionFAQLanding.Answer0" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </AccordionItemPanel>
        </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <FormattedMessage id="SectionFAQLanding.Question1" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FormattedMessage id="SectionFAQLanding.Answer1" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <FormattedMessage id="SectionFAQLanding.Question2" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FormattedMessage id="SectionFAQLanding.Answer2" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <FormattedMessage id="SectionFAQLanding.Question3" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FormattedMessage id="SectionFAQLanding.Answer3" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <FormattedMessage id="SectionFAQLanding.Question4" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FormattedMessage id="SectionFAQLanding.Answer4" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
            </AccordionItemPanel>
          </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <FormattedMessage id="SectionFAQLanding.Question5" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <FormattedMessage id="SectionFAQLanding.Answer5" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={css.accordion__button_bottom}>
              <FormattedMessage id="SectionFAQLanding.Question6" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <FormattedMessage id="SectionFAQLanding.Answer6" values={{ lineBreak: <br />, pageBreak: <p></p> }} />
            <br />
            <NamedLink name="MarketsPage" className={css.link} >
              <FormattedMessage id="SectionFAQLanding.Answer6B" />
            </NamedLink>
          </AccordionItemPanel>
        </AccordionItem>
        </Accordion>
      </div>
      <div className={css.linktext}>
        <FormattedMessage id="SectionFAQLanding.moreQuestions" />
        <a href="/faq" className={css.subtitle}>
          <FormattedMessage id="SectionFAQLanding.faqPage" />
        </a>
        <p></p>
        <a href="/l/new" className={css.howitworksButton}>
          <FormattedMessage id="SectionHowItWorks.joinButton" />
        </a>{' '}
      </div>
    </div>
  );
};

SectionFAQLanding.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionFAQLanding.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionFAQLanding;
