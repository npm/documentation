import React from 'react'
import { Link } from '@primer/components'
import { Note, Screenshot } from 'theme'

const shared = {
  /* User login */
  'user-login': {
    text: (<>On the npm "<Link href="https://www.npmjs.com/login">Sign In</Link>" page, enter your account details and click <strong>Sign In</strong>.</>),
    image: (<Screenshot src="/shared/user-login.png" alt="Screenshot of npm login dialog" />),
  },
  'contact-support': {
    text: (<Link href="https://www.npmjs.com/support">contact npm Support</Link>),
  },
  'contact-enterprise-support': {
    text: (<Link href="mailto:enterprise@npmjs.com">contact Enterprise Support</Link>),
  },
  'profile-settings': {
    text: (<>In the upper right corner of the page, click your profile picture, then click <strong>Profile Settings</strong>.</>),
    image: (<Screenshot src="/shared/profile-settings.png" alt="Screenshot of profile settings selection in user menu" />),
  },
  'account-settings': {
    text: (<>In the upper right corner of the page, click your profile picture, then click <strong>Account</strong>.</>),
    image: (<Screenshot src="/shared/account-settings.png" alt="Screenshot of account settings selection in user menu" />),
  },
  'start-account-recovery': {
    text: (<>On the "Request an Account Recovery" page, click <strong>Start Account Recovery</strong>.</>),
    image: (<Screenshot src="/getting-started/setting-up-your-npm-user-account/request-account-recovery.png" alt="Screenshot showing account recovery page" />),
  },
  'use-recovery-code': {
    text: (<>On the "Two-Factor Authentication" page, click <strong>Use a recovery code or request a reset</strong>.</>),
    image: (<Screenshot src="/getting-started/setting-up-your-npm-user-account/recovery-code-link.png" alt="Screenshot showing Security Key prompt with a link to navigate to the recovery code input screen" />),
  },
  'support-ticket-form': {
    text: (<>In the "Open a Support Ticket" form, enter the following information:</>),
  },
  'enter-email-address': {
    text: (<>In the <strong>Email</strong> field, enter an email address where our support team can contact you.</>),
  },
  'support-ticket-other': {
    text: (<>If you need help with anything else, in the <strong>How can we help?</strong> section, select <strong>Other</strong> and enter more information in the <strong>Additional Details</strong> field.</>),
  },
  'connect-to-accounts': {
    text: (<>
      <ul>
        <li>If you have previously linked a GitHub account to your npm account, select <strong>Connect to GitHub</strong>. This will help our support team verify your account.</li>
        <li>If you have previously linked a Twitter account to your npm account, select <strong>Connect to Twitter</strong>. This will help our support team verify your account.</li>
      </ul>
    </>
    ),
  },
  'submit-support-ticket': {
    text: (<>At the bottom of the form, click <strong>Submit Support Ticket</strong>.</>),
  },

  /* Billing */
  'billing-creditcard-form': {
    text: (<>
            In the credit card information dialog box, enter your credit card information:

      <ul>
        <li>Card number</li>
        <li>MM / YY: the month and year of the card expiration date</li>
        <li>CVC: the three-digit code on the credit card</li>
      </ul>
    </>
    ),
    image: (<Screenshot src="/shared/billing-creditcard-form.png" alt="Screenshot of the credit card form" />),
  },
  'billing-downgrade-selection': {
    text: (<>Under "change plan", click <strong>Downgrade Plan</strong>.</>),
    image: (<Screenshot src="/shared/billing-downgrade-selection.png" alt="Screenshot of the downgrade plan button" />),
  },
  'billing-downgrade-confirm': {
    text: (<>Under "Are you sure?", click <strong>Downgrade to a free account</strong>.</>),
    image: (<Screenshot src="/shared/billing-downgrade-confirm.png" alt="Screenshot of the downgrade plan confirmation" />),
  },
  'billing-download': {
    text: (<>To download a single receipt, find the row of the receipt you want to download, then click the PDF icon on the right side of the row.</>),
    image: (<Screenshot src="/shared/billing-download-icon.png" alt="Screenshot of the download receipt icon" />),
  },
  'billing-download-checked': {
    text: (<>To download multiple receipts, first select the receipts that you wish to download by selecting the box next to the date.  To select all receipts, select the checkbox next to the "Date" header.  Then click <strong>Download Checked</strong>.</>),
    image: (<Screenshot src="/shared/billing-download-checked.png" alt="Screenshot of the download checked option" />),
  },
  'billing-email': {
    text: (<>To email a single receipt, find the row of the receipt you want to download, then, on the right side of the row, click the email icon.</>),
    image: (<Screenshot src="/shared/billing-email-icon.png" alt="Screenshot of the email receipt icon" />),
  },
  'billing-email-checked': {
    text: (<>To email multiple receipts, first select the receipts that you wish to download by selecting the box next to the date.  To select all receipts, select the checkbox next to the "Date" header.  Then click <strong>Email Checked</strong>.</>),
    image: (<Screenshot src="/shared/billing-email-checked.png" alt="Screenshot of the email checked receipt icon" />),
  },
  'billing-email-receipt': {
    text: (<>In the Email Receipt dialog box, fill in the "From", "To", and "Message" fields.</>),
    image: (<Screenshot src="/shared/billing-email-receipt.png" alt="Screenshot of the email receipt dialog" />),
  },
  'billing-extra-info': {
    text: (<>To add a business name, VAT number, address of record, or other information to your receipts, in the "Extra Billing Information" text box, type the information.</>),
    image: (<Screenshot src="/shared/billing-extra-info.png" alt="Screenshot of the extra billing info dialog" />),
  },
  'billing-extra-receipt-email': {
    text: (<>To update the email address used for receipts, beside "Send my receipts", select the checkbox and type the email address that should receive billing receipts.</>),
    image: (<Screenshot src="/shared/billing-extra-receipt-email.png" alt="Screenshot of billing receipt email settings" />),
  },
  'billing-extra-save': {
    text: (<>Click <strong>Save</strong>.</>),
    image: (<Screenshot src="/shared/billing-extra-save.png" alt="Screenshot of billing extra info save button" />),
  },
  'billing-form': {
    text: (<>
            In the billing information dialog box, enter your billing information:

      <ul>
        <li>Email: the email address used for the billing contact</li>
        <li>Name: the name on the credit card used to pay</li>
        <li>Street, City, ZIP Code, Country: the billing address associated with the credit card</li>
      </ul>
    </>
    ),
    image: (<Screenshot src="/shared/billing-form.png" alt="Screenshot of billing form" />),
  },
  'billing-history': {
    text: (<>On the Billing Information page, under "monthly bill", select <strong>View Billing History</strong>.</>),
    image: (<Screenshot src="/shared/billing-history.png" alt="Screenshot of billing history selection in user menu" />),
  },
  'billing-info': {
    text: (<>In the upper right corner of the page, click your profile picture, then select <strong>Billing Info</strong>.</>),
    image: (<Screenshot src="/shared/billing-info.png" alt="Screenshot of billing info selection in user menu" />),
  },
  'billing-receipt-settings': {
    text: (<>At the bottom of the Billing History dialog box, click "Receipt Settings".</>),
    image: (<Screenshot src="/shared/billing-receipt-settings.png" alt="Screenshot of billing receipt settings" />),
  },
  'billing-update-card': {
    text: (<>Click <strong>Update Card</strong>.</>),
    image: (<Screenshot src="/shared/billing-update-card.png" alt="Screenshot of update credit card confirmation button" />),
  },
  'billing-view': {
    text: (<>To view a single receipt, find the row of the receipt you want to view, then, on the right side of the row, click the view icon.</>),
    image: (<Screenshot src="/shared/billing-view-icon.png" alt="Screenshot of the view receipt icon" />),
  },
  'grace-period': {
    text: 'nine days',
  },
  'payment-info-button': {
    text: (<>Click <strong>Payment Info</strong>.</>),
    image: (<Screenshot src="/shared/payment-info-button.png" alt="Screenshot of payment information button" />),
  },
  'payment-remember-me': {
    text: (<>To save your credit card information for other payments on npm, select "Remember me".</>),
    image: (<Screenshot src="/shared/payment-remember-me.png" alt="Screenshot of payment remember me button" />),
  },
  'payment-info': {
    text: (<>Under "monthly bill", click <strong>Edit Payment Info</strong>.</>),
    image: (<Screenshot src="/shared/payment-info.png" alt="Screenshot of edit payment info link" />),
  },
  'billing-price-teams': {
    text: (<>$7 per member per month</>),
  },
  'billing-organization-plans': {
    image: (<Screenshot src="/shared/billing-plan-selection.png" alt="Screenshot showing the billing plan selection dialog" />),
  },

  /* Package management */
  'organization-package-public': {
    image: (<Screenshot src="/shared/organization-package-public.png" alt="Screenshot of a public npm Teams package" />),
  },
  'organization-package-private': {
    image: (<Screenshot src="/shared/organization-package-private.png" alt="Screenshot of a private npm Teams package" />),
  },

  /* Organizations */
  'organization-create': {
    text: (<>In the upper right corner of the page, click your profile picture, then click <strong>Add an Organization</strong>.</>),
    image: (<Screenshot src="/shared/organization-create.png" alt="Screenshot of the add an organization dropdown menu" />),
  },
  'organization-selection': {
    text: (<>In the left sidebar, click the name of your organization.</>),
    image: (<Screenshot src="/shared/organization-selection.png" alt="Screenshot of a selected organization" />),
  },
  'organization-billing-tab': {
    text: (<>On the organization settings page, click <strong>Billing</strong>.</>),
    image: (<Screenshot src="/shared/organization-billing-tab.png" alt="Screenshot of the organization billing tab" />),
  },
  'organization-members-tab': {
    text: (<>On the organization settings page, click <strong>Members</strong>.</>),
    image: (<Screenshot src="/shared/organization-members-tab.png" alt="Screenshot of the organization members tab" />),
  },
  'organization-teams-tab': {
    text: (<>On the organization settings page, click <strong>Teams</strong>.</>),
    image: (<Screenshot src="/shared/organization-teams-tab.png" alt="Screenshot of the organization teams tab" />),
  },

  /* Enterprise */
  'enterprise-admin-panel': {
    text: (<>In the upper right corner of the page, click your profile picture, then click <strong>Site Administration</strong>.</>),
    image: (<Screenshot src="/shared/enterprise-admin-panel.png" alt="Screenshot of the admin panel" />),
  },
  'enterprise-admin-panel-settings': {
    image: (<Screenshot src="/shared/enterprise-admin-panel-settings.png" alt="Screenshot of the admin panel settings button" />),
  },
  'enterprise-choose-security-policy': {
    image: (<Screenshot src="/shared/enterprise-choose-security-policy.png" alt="Screenshot of the choose security policy" />),
  },
  'enterprise-custom-blocking-message': {
    image: (<Screenshot src="/shared/enterprise-custom-blocking-message.png" alt="Screenshot of the custom blocking message option" />),
  },
  'enterprise-instance-login': {
    text: (<>Log in to your Enterprise instance.</>),
  },
  'enterprise-migration-requirements': {
    text: (<Note><><strong>Note:</strong> Using <code><a href="https://www.npmjs.com/package/pneumatic-tubes">pneumatic-tubes</a></code> for migration requires <ul><li>Node 8+</li><li>npm 5+ (to install or upgrade, run <code>npm install npm@latest -g</code>)</li></ul></></Note>),
  },
}

export default shared
