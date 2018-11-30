import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '@folio/stripes/components';

import BulkRenewInfo from './BulkRenewInfo';

class BulkRenewalDialog extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func,
      intl: PropTypes.shape({
        formatMessage: PropTypes.func,
      }),
    }),
    onClose: PropTypes.func,
    open: PropTypes.bool,
  };

  render() {
    const { formatMessage } = this.props.stripes.intl;
    const modalLabel = formatMessage({ id: 'ui-users.brd.renewConfirmation' });

    return (
      <Modal
        size="large"
        dismissible
        closeOnBackgroundClick
        enforceFocus={false} // Needed to allow Calendar in Datepicker to get focus
        onClose={this.props.onClose}
        open={this.props.open}
        label={modalLabel}
      >
        <BulkRenewInfo
          {...this.props}
          onCancel={this.props.onClose}
        />
      </Modal>
    );
  }
}

export default BulkRenewalDialog;
