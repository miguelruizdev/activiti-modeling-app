/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Routes } from '@angular/router';
import { ApplicationLoaderGuard } from './guards/application-loader.guard';
import { SelectedApplicationSetterGuard } from './guards/selected-application-setter.guard';
import { ProcessesLoaderGuard } from './guards/processes-loader.guard';
import { ApplicationContentComponent } from '../components/application-content/application-content.component';
import { ApplicationNavigationComponent } from '../components/application-navigation/application-navigation.component';
import { processEditorRoutes } from '../../process-editor/router/process-editor.routes';
import { PROCESS } from 'ama-sdk';

export const applicationEditorRoutes: Routes = [
    {
        path: ':applicationId',
        canActivate: [ApplicationLoaderGuard, SelectedApplicationSetterGuard],
        children: [
            { path: '', component: ApplicationContentComponent },
            { path: '', component: ApplicationNavigationComponent, outlet: 'navigation' },
            // Impossible to lazily load ADF modules, that is why the hack
            { path: PROCESS, children: processEditorRoutes, canActivate: [ProcessesLoaderGuard] }
        ]
    }
];
