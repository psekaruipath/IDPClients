import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountService } from './api/account.service';
import { AntiForgeryService } from './api/antiForgery.service';
import { ApiResourceService } from './api/apiResource.service';
import { ClientService } from './api/client.service';
import { ExternalIdentityProviderService } from './api/externalIdentityProvider.service';
import { IdentityResourceService } from './api/identityResource.service';
import { LanguageService } from './api/language.service';
import { LoginCallbackService } from './api/loginCallback.service';
import { MessageTemplateService } from './api/messageTemplate.service';
import { PartitionService } from './api/partition.service';
import { RobotPropertiesService } from './api/robotProperties.service';
import { SettingService } from './api/setting.service';
import { TenantService } from './api/tenant.service';
import { UserService } from './api/user.service';
import { UserLoginAttemptService } from './api/userLoginAttempt.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AccountService,
    AntiForgeryService,
    ApiResourceService,
    ClientService,
    ExternalIdentityProviderService,
    IdentityResourceService,
    LanguageService,
    LoginCallbackService,
    MessageTemplateService,
    PartitionService,
    RobotPropertiesService,
    SettingService,
    TenantService,
    UserService,
    UserLoginAttemptService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
