import * as React from 'react';
import * as mobxReact from 'mobx-react';
import * as mio from '../';

@mobxReact.observer
export class LayerView extends React.Component {
  render() {
    let topIndex = mio.layerViewModel.items.length - 1;
    return mio.layerViewModel.items.map((layer, index) => {
      let isTopIndex = index === topIndex;
      let display = isTopIndex ? 'block' : 'none';
      return <div key={index} style={{display}}>{layer}</div>;
    })
  }
}
