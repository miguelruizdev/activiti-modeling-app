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

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AmaState } from 'ama-sdk';
import { selectAppDirtyState } from '../../../store/selectors/app.selectors';

export interface BreadcrumbItem {
    name?: string;
    url?: string;
}

@Component({
    selector: 'ama-header-breadcrumbs',
    templateUrl: './header-breadcrumbs.component.html'
})
export class HeaderBreadcrumbsComponent implements OnInit {
    @Input() breadcrumbs$: Observable<BreadcrumbItem[]>;

    dirtyState$: Observable<boolean>;

    constructor(private store: Store<AmaState>) {}

    ngOnInit() {
        this.dirtyState$ = this.store.select(selectAppDirtyState);
    }
}
