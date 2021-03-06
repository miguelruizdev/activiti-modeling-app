export const PROCESS_FILE_FORMAT = '.bpmn';
export const CONNECTOR_FILE_FORMAT = '.json';
export const FORM_FILE_FORMAT = '.json';
export const PLUGIN_FILE_FORMAT = '.json';
export const DATA_FILE_FORMAT = '.json';
export const DECISION_TABLE_FILE_FORMAT = '.json';

export const createProcessName = (name) => {
    return name.replace(PROCESS_FILE_FORMAT, '');
};

export const createConnectorName = (name) => {
    return name.replace(CONNECTOR_FILE_FORMAT, '');
};

export const createFormName = (name) => {
    return name.replace(FORM_FILE_FORMAT, '');
};

export const createPluginName = (name) => {
    return name.replace(PLUGIN_FILE_FORMAT, '');
};

export const createDataName = (name) => {
    return name.replace(DATA_FILE_FORMAT, '');
};

export const createDecisionTableName = (name) => {
    return name.replace(DECISION_TABLE_FILE_FORMAT, '');
};

export const changeFileName = (file: File, newName: string): File => {
    const blob = file.slice(0, file.size, file.type);
    return new File([blob], newName, { type: file.type });
};
