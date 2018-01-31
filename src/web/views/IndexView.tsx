import * as React from 'react';
import * as mobxReact from 'mobx-react';
import * as mio from '../';
import * as mui from 'material-ui';
import * as muiIcon from 'material-ui-icons';
import * as rrd from 'react-router-dom';

// TODO: rrd.Link is <a>, weird styles on ListItem, better way?
@mobxReact.observer
export class IndexView extends React.Component<{vm: mio.IndexViewModel}> {
  componentWillMount() {
    this.props.vm.fetchAsync();
  }

  render() {
    let vm = this.props.vm;
    if (vm.entries) {
      return (
        <mui.Paper>
          <mui.List>
            {vm.entries.map(entry => (
              <rrd.Link key={entry.uniqueKey} to={entry.url}>
                <mui.ListItem button>
                  <mui.ListItemIcon>
                    <muiIcon.Folder />
                  </mui.ListItemIcon>
                  <mui.ListItemText primary={entry.displayName} secondary={entry.providerName} />
                </mui.ListItem>
              </rrd.Link>
            ))}
          </mui.List>
        </mui.Paper>
      )
    } else {
      // TODO: Center.
      return (
        <mui.Paper>
          <mui.CircularProgress />
        </mui.Paper>
      );
    }
  }
}