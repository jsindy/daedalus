// @flow
import React from 'react';
import { findKey } from 'lodash';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SettingsWrapper from '../utils/SettingsWrapper';
import {
  DATE_ENGLISH_OPTIONS,
  LANGUAGE_OPTIONS,
  NUMBER_OPTIONS,
  TIME_OPTIONS,
} from '../../../../source/renderer/app/config/profileConfig';
import { updateParam } from '../../../addons/DaedalusMenu';
import { locales, themesIds } from '../../_support/config';

// Screens
import ProfileSettingsForm from '../../../../source/renderer/app/components/widgets/forms/ProfileSettingsForm';
import StakePoolsSettings from '../../../../source/renderer/app/components/settings/categories/StakePoolsSettings';
import DisplaySettings from '../../../../source/renderer/app/components/settings/categories/DisplaySettings';
import SupportSettings from '../../../../source/renderer/app/components/settings/categories/SupportSettings';
import TermsOfUseSettings from '../../../../source/renderer/app/components/settings/categories/TermsOfUseSettings';
import WalletSettings from '../../../../source/renderer/app/components/settings/categories/WalletSettings';

const getParamName = (obj, itemName): any =>
  Object.entries(obj).find((entry: [any, any]) => itemName === entry[1]);

/* eslint-disable consistent-return */
storiesOf('Settings|General', module)
  .addDecorator(SettingsWrapper)

  // ====== Stories ======

  .add('General', () => (
    <ProfileSettingsForm
      isSubmitting={boolean('isSubmitting', false)}
      onSubmit={action('submit')}
      onChangeItem={(param: string, value: string) => {
        if (param === 'locale') {
          updateParam({
            param: 'localeName',
            value: findKey(locales, (item) => item === value),
          });
        }
      }}
      currentDateFormat={DATE_ENGLISH_OPTIONS[0].value}
      currentLocale={LANGUAGE_OPTIONS[0].value}
      currentNumberFormat={NUMBER_OPTIONS[0].value}
      currentTimeFormat={TIME_OPTIONS[0].value}
    />
  ))
  .add('Wallets', () => (
    <WalletSettings
      currencySelected={{
        id: 'uniswap-state-dollar',
        symbol: 'usd',
        name: 'unified Stable Dollar',
      }}
      currencyRate={0.321}
      currencyList={[]}
    />
  ))
  .add('Stake Pools', () => (
    <StakePoolsSettings
      onSelectSmashServerUrl={action('onSelectSmashServerUrl')}
      onResetSmashServerError={action('onResetSmashServerError')}
      isLoading={false}
      smashServerUrl="https://smash.cardano-mainnet.iohk.io"
      onOpenExternalLink={action('onOpenExternalLink')}
    />
  ))
  .add('Themes', () => (
    <DisplaySettings
      theme="DarkBlue"
      selectTheme={({ theme }) => {
        updateParam({
          param: 'themeName',
          value: getParamName(themesIds, theme)[0],
        });
      }}
    />
  ))
  .add('Terms of Service', (props) => {
    const termsOfUseSource = require(`../../../../source/renderer/app/i18n/locales/terms-of-use/${props.locale}.md`);
    return (
      <TermsOfUseSettings
        localizedTermsOfUse={termsOfUseSource}
        onOpenExternalLink={() => null}
      />
    );
  })
  .add('Support', () => (
    <SupportSettings
      onExternalLinkClick={action('onExternalLinkClick')}
      onSupportRequestClick={action('onSupportRequestClick')}
      onDownloadLogs={action('onDownloadLogs')}
      disableDownloadLogs={boolean('disableDownloadLogs', false)}
    />
  ));
