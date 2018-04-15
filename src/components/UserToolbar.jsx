import React from 'react';
import PropTypes from 'prop-types';
import { BlueTheme, GreenTheme, OrangeTheme, Toolbar } from 'osm-ui-react';

const UserToolbar = ({ history, match, ...props }) => (
  <BlueTheme>
    <Toolbar opened position="right-top" {...props}>
      <BlueTheme>
        <Toolbar.Item
          icon="user"
          onClick={() => history.push(`${match.url}/user`)}
        />
      </BlueTheme>
      <GreenTheme>
        <Toolbar.Item
          icon="share-alt"
          onClick={() => history.push(`${match.url}/share`)}
        />
      </GreenTheme>
      <OrangeTheme>
        <Toolbar.Item
          icon="sliders"
          onClick={() => history.push(`${match.url}/settings`)}
        />
      </OrangeTheme>
    </Toolbar>
  </BlueTheme>
);

UserToolbar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

UserToolbar.defaultProps = {};

UserToolbar.displayName = 'UserToolbar';

export default UserToolbar;
