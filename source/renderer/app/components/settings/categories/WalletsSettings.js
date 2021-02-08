// @flow
import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { map } from 'lodash';
import { defineMessages, intlShape } from 'react-intl';
import { Select } from 'react-polymorph/lib/components/Select';
import NormalSwitch from '../../widgets/forms/NormalSwitch';
import styles from './WalletsSettings.scss';

// /Users/danilo/iohk/daedalus/source/renderer/app/components/widgets/forms/NormalSwitch.js
// /Users/danilo/iohk/daedalus/source/renderer/app/components/settings/categories/WalletsSettings.js

console.log('NormalSwitch', NormalSwitch);
const messages = defineMessages({
  currencyTitleLabel: {
    id: 'settings.wallets.currency.titleLabel',
    defaultMessage: '!!!Show ada price in other currency',
    description:
      'titleLabel for the Currency settings in the Wallets settings page.',
  },
  currencyDescription: {
    id: 'settings.wallets.currency.description',
    defaultMessage:
      '!!!This feature does… Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'currencyDescription for the Currency settings in the Wallets settings page.',
  },
  currencySelectLabel: {
    id: 'settings.wallets.currency.selectLabel',
    defaultMessage: '!!!Countervalue',
    description:
      'currencySelectLabel for the Currency settings in the Wallets settings page.',
  },
});

type Props = {
  currencySelected: string,
  currencyRate: number,
  currencyList: Array<any>,
  currencyIsActive: boolean,
  onSelectCurrency: Function,
  onToggleCurrencyIsActive: Function,
};

@observer
export default class WalletSettings extends Component<Props> {
  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    const {
      currencySelected,
      currencyRate,
      currencyList,
      currencyIsActive,
      onSelectCurrency,
      onToggleCurrencyIsActive,
    } = this.props;

    const currencyOptions = map(currencyList, ({ id, symbol, name }) => {
      return {
        label: `${symbol.toUpperCase()} - ${name}`,
        value: id,
      };
    });

    return (
      <div className={styles.component}>
        <label>{intl.formatMessage(messages.currencyTitleLabel)}</label>
        <div className={styles.description}>
          <p>{intl.formatMessage(messages.currencyDescription)}</p>
          <NormalSwitch
            checked={currencyIsActive}
            onChange={onToggleCurrencyIsActive}
            className={styles.switch}
          />
        </div>
        <Select
          label={intl.formatMessage(messages.currencySelectLabel)}
          value={currencySelected ? currencySelected.id : null}
          options={currencyOptions}
          onChange={onSelectCurrency}
        />
      </div>
    );
  }
}
