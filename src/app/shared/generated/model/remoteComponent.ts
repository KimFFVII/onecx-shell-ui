/**
 * onecx-shell-bff
 * OneCx shell Bff
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Technologies } from './technologies';

export interface RemoteComponent {
  name: string;
  baseUrl: string;
  remoteEntryUrl: string;
  appId: string;
  productName: string;
  exposedModule: string;
  remoteName?: string;
  elementName?: string;
  technology?: Technologies;
}
