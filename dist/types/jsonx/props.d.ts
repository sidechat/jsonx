import { jsonx } from "./jsonx";
export declare type functionParam = (...params: any[]) => any;
export declare type dynamicFunctionParams = {
    jsonx?: jsonx;
    propName?: string;
    traverseObject?: any;
};
export declare type dynamicComponentProps = {
    propName?: string;
    traverseObject?: any;
    useCache?: boolean;
    cacheTimeout?: number;
    loadingJSONX?: jsonx;
    loadingErrorJSONX?: jsonx;
    cacheTimeoutFunction?: functionParam;
    jsonx?: jsonx;
    name?: string;
    transformFunction?: functionParam;
    fetchURL?: string;
    fetchOptions?: any;
    fetchFunction?: functionParam;
};
export declare type formComponentProps = {
    name?: string;
    hookFormOptions?: any;
    onSubmit?: functionParam;
    formComponent?: jsonx;
    formWrapperComponent?: jsonx;
    formWrapperProps?: any;
    formKey?: any;
};
