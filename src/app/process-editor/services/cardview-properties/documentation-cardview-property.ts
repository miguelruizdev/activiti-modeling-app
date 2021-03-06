import { CardViewTextItemModel } from '@alfresco/adf-core';
import { ElementHelper } from '../bpmn-js/element.helper';
import { BpmnProperty } from '../bpmn/properties';
import { FactoryProps } from './cardview-properties.factory';

const propertyName = BpmnProperty.documentation;

export function createDocumentationProperty({ element }: FactoryProps) {
    return new CardViewTextItemModel({
        label: 'APP.PROCESS_EDITOR.ELEMENT_PROPERTIES.DOCUMENTATION',
        value: ElementHelper.getProperty(element, propertyName),
        key: propertyName,
        default: '',
        multiline: true,
        editable: true,
        data: { id: element.id }
    });
}
