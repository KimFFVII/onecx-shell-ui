const {
  ModifyEntryPlugin,
} = require('@angular-architects/module-federation/src/utils/modify-entry-plugin');
const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const webpackConfig = {
  ...withModuleFederationPlugin({
    shared: share({
      '@angular/core': {
        requiredVersion: 'auto',
        includeSecondaries: true,
        eager: true,
      },
      '@angular/forms': {
        requiredVersion: 'auto',
        includeSecondaries: true,
        eager: true,
      },
      '@angular/common': {
        requiredVersion: 'auto',
        includeSecondaries: {
          skip: ['@angular/common/http/testing'],
        },
        eager: true,
      },
      '@angular/common/http': {
        requiredVersion: 'auto',
        includeSecondaries: true,
        eager: true,
      },
      '@angular/router': {
        requiredVersion: 'auto',
        includeSecondaries: true,
        eager: true,
      },
      rxjs: { requiredVersion: 'auto', includeSecondaries: true, eager: true },
      '@ngx-translate/core': {
        requiredVersion: 'auto',
        eager: true,
      },
      '@angular-architects/module-federation-tools': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/accelerator': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/angular-accelerator': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/angular-integration-interface': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/angular-remote-components': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/integration-interface': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/keycloak-auth': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/portal-integration-angular': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      '@onecx/shell-core': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      },
      'primeng': {
        requiredVersion: 'auto',
        includeSecondaries: true,
      }
    }),

    sharedMappings: ['@onecx/portal-integration-angular'],
  }),
};

const plugins = webpackConfig.plugins.filter(
  (plugin) => !(plugin instanceof ModifyEntryPlugin)
);

module.exports = {
  ...webpackConfig,
  plugins,
};
