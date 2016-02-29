import * as mio from '../default';

/**
 * Represents each application action.
 * @internal
 */
export let applicationActions = {
  /**
   * Navigates back through the menu or history.
   */
  back: mio.store.reviser('APPLICATION_BACK', function(state: mio.IApplicationState): void {
    if (state.menu.type !== mio.MenuType.Default) {
      state.menu.type = mio.MenuType.Default;
    } else {
      history.back();
    }
  }),

  /**
   * Sets the series
   * @param revisor The modal type.
   */
  setModalType: mio.store.reviser('APPLICATION_SETMODALTYPE', function(state: mio.IApplicationState, modalType: mio.ModalType): void {
    state.modalType = modalType;
  }),

  /**
   * Sets the series
   * @param revisor The menu type.
   */
  setSeries: mio.store.reviser('APPLICATION_SETSERIES', function(state: mio.IApplicationState, series: mio.ILibrarySeries[]): void {
    state.series = mio.option(series);
  })
};