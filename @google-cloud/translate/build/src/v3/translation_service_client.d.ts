/// <reference types="node" />
import type * as gax from 'google-gax';
import type { Callback, CallOptions, Descriptors, ClientOptions, LROperation, PaginationCallback } from 'google-gax';
import { Transform } from 'stream';
import * as protos from '../../protos/protos';
/**
 *  Provides natural language translation operations.
 * @class
 * @memberof v3
 */
export declare class TranslationServiceClient {
    private _terminated;
    private _opts;
    private _providedCustomServicePath;
    private _gaxModule;
    private _gaxGrpc;
    private _protos;
    private _defaults;
    auth: gax.GoogleAuth;
    descriptors: Descriptors;
    warn: (code: string, message: string, warnType?: string) => void;
    innerApiCalls: {
        [name: string]: Function;
    };
    pathTemplates: {
        [name: string]: gax.PathTemplate;
    };
    operationsClient: gax.OperationsClient;
    translationServiceStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of TranslationServiceClient.
     *
     * @param {object} [options] - The configuration object.
     * The options accepted by the constructor are described in detail
     * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
     * The common options are:
     * @param {object} [options.credentials] - Credentials object.
     * @param {string} [options.credentials.client_email]
     * @param {string} [options.credentials.private_key]
     * @param {string} [options.email] - Account email address. Required when
     *     using a .pem or .p12 keyFilename.
     * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
     *     .p12 key downloaded from the Google Developers Console. If you provide
     *     a path to a JSON file, the projectId option below is not necessary.
     *     NOTE: .pem and .p12 require you to specify options.email as well.
     * @param {number} [options.port] - The port on which to connect to
     *     the remote host.
     * @param {string} [options.projectId] - The project ID from the Google
     *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
     *     the environment variable GCLOUD_PROJECT for your project ID. If your
     *     app is running in an environment which supports
     *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
     *     your project ID will be detected automatically.
     * @param {string} [options.apiEndpoint] - The domain name of the
     *     API remote host.
     * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
     *     Follows the structure of {@link gapicConfig}.
     * @param {boolean} [options.fallback] - Use HTTP/1.1 REST mode.
     *     For more information, please check the
     *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
     * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
     *     need to avoid loading the default gRPC version and want to use the fallback
     *     HTTP implementation. Load only fallback version and pass it to the constructor:
     *     ```
     *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
     *     const client = new TranslationServiceClient({fallback: true}, gax);
     *     ```
     */
    constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback);
    /**
     * Initialize the client.
     * Performs asynchronous operations (such as authentication) and prepares the client.
     * This function will be called automatically when any class method is called for the
     * first time, but if you need to initialize it before calling an actual method,
     * feel free to call initialize() directly.
     *
     * You can await on this method if you want to make sure the client is initialized.
     *
     * @returns {Promise} A promise that resolves to an authenticated service stub.
     */
    initialize(): Promise<{
        [name: string]: Function;
    }>;
    /**
     * The DNS address for this API service.
     * @returns {string} The DNS address for this service.
     */
    static get servicePath(): string;
    /**
     * The DNS address for this API service - same as servicePath(),
     * exists for compatibility reasons.
     * @returns {string} The DNS address for this service.
     */
    static get apiEndpoint(): string;
    /**
     * The port for this API service.
     * @returns {number} The default port for this service.
     */
    static get port(): number;
    /**
     * The scopes needed to make gRPC calls for every method defined
     * in this service.
     * @returns {string[]} List of default scopes.
     */
    static get scopes(): string[];
    getProjectId(): Promise<string>;
    getProjectId(callback: Callback<string, undefined, undefined>): void;
    /**
     * Translates input text and returns translated text.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string[]} request.contents
     *   Required. The content of the input in string format.
     *   We recommend the total content be less than 30,000 codepoints. The max
     *   length of this field is 1024. Use BatchTranslateText for larger text.
     * @param {string} [request.mimeType]
     *   Optional. The format of the source text, for example, "text/html",
     *    "text/plain". If left blank, the MIME type defaults to "text/html".
     * @param {string} [request.sourceLanguageCode]
     *   Optional. The ISO-639 language code of the input text if
     *   known, for example, "en-US" or "sr-Latn". Supported language codes are
     *   listed in Language Support. If the source language isn't specified, the API
     *   attempts to identify the source language automatically and returns the
     *   source language within the response.
     * @param {string} request.targetLanguageCode
     *   Required. The ISO-639 language code to use for translation of the input
     *   text, set to one of the language codes listed in Language Support.
     * @param {string} request.parent
     *   Required. Project or location to make a call. Must refer to a caller's
     *   project.
     *
     *   Format: `projects/{project-number-or-id}` or
     *   `projects/{project-number-or-id}/locations/{location-id}`.
     *
     *   For global calls, use `projects/{project-number-or-id}/locations/global` or
     *   `projects/{project-number-or-id}`.
     *
     *   Non-global location is required for requests using AutoML models or
     *   custom glossaries.
     *
     *   Models and glossaries must be within the same region (have same
     *   location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {string} [request.model]
     *   Optional. The `model` type requested for this translation.
     *
     *   The format depends on model type:
     *
     *   - AutoML Translation models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
     *
     *   - General (built-in) models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
     *
     *
     *   For global (non-regionalized) requests, use `location-id` `global`.
     *   For example,
     *   `projects/{project-number-or-id}/locations/global/models/general/nmt`.
     *
     *   If not provided, the default Google model (NMT) will be used
     * @param {google.cloud.translation.v3.TranslateTextGlossaryConfig} [request.glossaryConfig]
     *   Optional. Glossary to be applied. The glossary must be
     *   within the same region (have the same location-id) as the model, otherwise
     *   an INVALID_ARGUMENT (400) error is returned.
     * @param {number[]} [request.labels]
     *   Optional. The labels with user-defined metadata for the request.
     *
     *   Label keys and values can be no longer than 63 characters
     *   (Unicode codepoints), can only contain lowercase letters, numeric
     *   characters, underscores and dashes. International characters are allowed.
     *   Label values are optional. Label keys must start with a letter.
     *
     *   See https://cloud.google.com/translate/docs/advanced/labels for more
     *   information.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.translation.v3.TranslateTextResponse|TranslateTextResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.translate_text.js</caption>
     * region_tag:translate_v3_generated_TranslationService_TranslateText_async
     */
    translateText(request?: protos.google.cloud.translation.v3.ITranslateTextRequest, options?: CallOptions): Promise<[
        protos.google.cloud.translation.v3.ITranslateTextResponse,
        protos.google.cloud.translation.v3.ITranslateTextRequest | undefined,
        {} | undefined
    ]>;
    translateText(request: protos.google.cloud.translation.v3.ITranslateTextRequest, options: CallOptions, callback: Callback<protos.google.cloud.translation.v3.ITranslateTextResponse, protos.google.cloud.translation.v3.ITranslateTextRequest | null | undefined, {} | null | undefined>): void;
    translateText(request: protos.google.cloud.translation.v3.ITranslateTextRequest, callback: Callback<protos.google.cloud.translation.v3.ITranslateTextResponse, protos.google.cloud.translation.v3.ITranslateTextRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Detects the language of text within a request.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Project or location to make a call. Must refer to a caller's
     *   project.
     *
     *   Format: `projects/{project-number-or-id}/locations/{location-id}` or
     *   `projects/{project-number-or-id}`.
     *
     *   For global calls, use `projects/{project-number-or-id}/locations/global` or
     *   `projects/{project-number-or-id}`.
     *
     *   Only models within the same region (has same location-id) can be used.
     *   Otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {string} [request.model]
     *   Optional. The language detection model to be used.
     *
     *   Format:
     *   `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}`
     *
     *   Only one language detection model is currently supported:
     *   `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`.
     *
     *   If not specified, the default model is used.
     * @param {string} request.content
     *   The content of the input stored as a string.
     * @param {string} [request.mimeType]
     *   Optional. The format of the source text, for example, "text/html",
     *   "text/plain". If left blank, the MIME type defaults to "text/html".
     * @param {number[]} [request.labels]
     *   Optional. The labels with user-defined metadata for the request.
     *
     *   Label keys and values can be no longer than 63 characters
     *   (Unicode codepoints), can only contain lowercase letters, numeric
     *   characters, underscores and dashes. International characters are allowed.
     *   Label values are optional. Label keys must start with a letter.
     *
     *   See https://cloud.google.com/translate/docs/advanced/labels for more
     *   information.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.translation.v3.DetectLanguageResponse|DetectLanguageResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.detect_language.js</caption>
     * region_tag:translate_v3_generated_TranslationService_DetectLanguage_async
     */
    detectLanguage(request?: protos.google.cloud.translation.v3.IDetectLanguageRequest, options?: CallOptions): Promise<[
        protos.google.cloud.translation.v3.IDetectLanguageResponse,
        protos.google.cloud.translation.v3.IDetectLanguageRequest | undefined,
        {} | undefined
    ]>;
    detectLanguage(request: protos.google.cloud.translation.v3.IDetectLanguageRequest, options: CallOptions, callback: Callback<protos.google.cloud.translation.v3.IDetectLanguageResponse, protos.google.cloud.translation.v3.IDetectLanguageRequest | null | undefined, {} | null | undefined>): void;
    detectLanguage(request: protos.google.cloud.translation.v3.IDetectLanguageRequest, callback: Callback<protos.google.cloud.translation.v3.IDetectLanguageResponse, protos.google.cloud.translation.v3.IDetectLanguageRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Returns a list of supported languages for translation.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Project or location to make a call. Must refer to a caller's
     *   project.
     *
     *   Format: `projects/{project-number-or-id}` or
     *   `projects/{project-number-or-id}/locations/{location-id}`.
     *
     *   For global calls, use `projects/{project-number-or-id}/locations/global` or
     *   `projects/{project-number-or-id}`.
     *
     *   Non-global location is required for AutoML models.
     *
     *   Only models within the same region (have same location-id) can be used,
     *   otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {string} [request.displayLanguageCode]
     *   Optional. The language to use to return localized, human readable names
     *   of supported languages. If missing, then display names are not returned
     *   in a response.
     * @param {string} [request.model]
     *   Optional. Get supported languages of this model.
     *
     *   The format depends on model type:
     *
     *   - AutoML Translation models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
     *
     *   - General (built-in) models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
     *
     *
     *   Returns languages supported by the specified model.
     *   If missing, we get supported languages of Google general NMT model.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.translation.v3.SupportedLanguages|SupportedLanguages}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.get_supported_languages.js</caption>
     * region_tag:translate_v3_generated_TranslationService_GetSupportedLanguages_async
     */
    getSupportedLanguages(request?: protos.google.cloud.translation.v3.IGetSupportedLanguagesRequest, options?: CallOptions): Promise<[
        protos.google.cloud.translation.v3.ISupportedLanguages,
        (protos.google.cloud.translation.v3.IGetSupportedLanguagesRequest | undefined),
        {} | undefined
    ]>;
    getSupportedLanguages(request: protos.google.cloud.translation.v3.IGetSupportedLanguagesRequest, options: CallOptions, callback: Callback<protos.google.cloud.translation.v3.ISupportedLanguages, protos.google.cloud.translation.v3.IGetSupportedLanguagesRequest | null | undefined, {} | null | undefined>): void;
    getSupportedLanguages(request: protos.google.cloud.translation.v3.IGetSupportedLanguagesRequest, callback: Callback<protos.google.cloud.translation.v3.ISupportedLanguages, protos.google.cloud.translation.v3.IGetSupportedLanguagesRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Translates documents in synchronous mode.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Location to make a regional call.
     *
     *   Format: `projects/{project-number-or-id}/locations/{location-id}`.
     *
     *   For global calls, use `projects/{project-number-or-id}/locations/global` or
     *   `projects/{project-number-or-id}`.
     *
     *   Non-global location is required for requests using AutoML models or custom
     *   glossaries.
     *
     *   Models and glossaries must be within the same region (have the same
     *   location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {string} [request.sourceLanguageCode]
     *   Optional. The ISO-639 language code of the input document if known, for
     *   example, "en-US" or "sr-Latn". Supported language codes are listed in
     *   Language Support. If the source language isn't specified, the API attempts
     *   to identify the source language automatically and returns the source
     *   language within the response. Source language must be specified if the
     *   request contains a glossary or a custom model.
     * @param {string} request.targetLanguageCode
     *   Required. The ISO-639 language code to use for translation of the input
     *   document, set to one of the language codes listed in Language Support.
     * @param {google.cloud.translation.v3.DocumentInputConfig} request.documentInputConfig
     *   Required. Input configurations.
     * @param {google.cloud.translation.v3.DocumentOutputConfig} [request.documentOutputConfig]
     *   Optional. Output configurations.
     *   Defines if the output file should be stored within Cloud Storage as well
     *   as the desired output format. If not provided the translated file will
     *   only be returned through a byte-stream and its output mime type will be
     *   the same as the input file's mime type.
     * @param {string} [request.model]
     *   Optional. The `model` type requested for this translation.
     *
     *   The format depends on model type:
     *
     *   - AutoML Translation models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
     *
     *   - General (built-in) models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
     *
     *
     *   If not provided, the default Google model (NMT) will be used for
     *   translation.
     * @param {google.cloud.translation.v3.TranslateTextGlossaryConfig} [request.glossaryConfig]
     *   Optional. Glossary to be applied. The glossary must be within the same
     *   region (have the same location-id) as the model, otherwise an
     *   INVALID_ARGUMENT (400) error is returned.
     * @param {number[]} [request.labels]
     *   Optional. The labels with user-defined metadata for the request.
     *
     *   Label keys and values can be no longer than 63 characters (Unicode
     *   codepoints), can only contain lowercase letters, numeric characters,
     *   underscores and dashes. International characters are allowed. Label values
     *   are optional. Label keys must start with a letter.
     *
     *   See https://cloud.google.com/translate/docs/advanced/labels for more
     *   information.
     * @param {string} [request.customizedAttribution]
     *   Optional. This flag is to support user customized attribution.
     *   If not provided, the default is `Machine Translated by Google`.
     *   Customized attribution should follow rules in
     *   https://cloud.google.com/translate/attribution#attribution_and_logos
     * @param {boolean} [request.isTranslateNativePdfOnly]
     *   Optional. is_translate_native_pdf_only field for external customers.
     *   If true, the page limit of online native pdf translation is 300 and only
     *   native pdf pages will be translated.
     * @param {boolean} [request.enableShadowRemovalNativePdf]
     *   Optional. If true, use the text removal server to remove the shadow text on
     *   background image for native pdf translation.
     *   Shadow removal feature can only be enabled when
     *   is_translate_native_pdf_only: false && pdf_native_only: false
     * @param {boolean} [request.enableRotationCorrection]
     *   Optional. If true, enable auto rotation correction in DVS.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.translation.v3.TranslateDocumentResponse|TranslateDocumentResponse}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.translate_document.js</caption>
     * region_tag:translate_v3_generated_TranslationService_TranslateDocument_async
     */
    translateDocument(request?: protos.google.cloud.translation.v3.ITranslateDocumentRequest, options?: CallOptions): Promise<[
        protos.google.cloud.translation.v3.ITranslateDocumentResponse,
        protos.google.cloud.translation.v3.ITranslateDocumentRequest | undefined,
        {} | undefined
    ]>;
    translateDocument(request: protos.google.cloud.translation.v3.ITranslateDocumentRequest, options: CallOptions, callback: Callback<protos.google.cloud.translation.v3.ITranslateDocumentResponse, protos.google.cloud.translation.v3.ITranslateDocumentRequest | null | undefined, {} | null | undefined>): void;
    translateDocument(request: protos.google.cloud.translation.v3.ITranslateDocumentRequest, callback: Callback<protos.google.cloud.translation.v3.ITranslateDocumentResponse, protos.google.cloud.translation.v3.ITranslateDocumentRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Gets a glossary. Returns NOT_FOUND, if the glossary doesn't
     * exist.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The name of the glossary to retrieve.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing {@link protos.google.cloud.translation.v3.Glossary|Glossary}.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.get_glossary.js</caption>
     * region_tag:translate_v3_generated_TranslationService_GetGlossary_async
     */
    getGlossary(request?: protos.google.cloud.translation.v3.IGetGlossaryRequest, options?: CallOptions): Promise<[
        protos.google.cloud.translation.v3.IGlossary,
        protos.google.cloud.translation.v3.IGetGlossaryRequest | undefined,
        {} | undefined
    ]>;
    getGlossary(request: protos.google.cloud.translation.v3.IGetGlossaryRequest, options: CallOptions, callback: Callback<protos.google.cloud.translation.v3.IGlossary, protos.google.cloud.translation.v3.IGetGlossaryRequest | null | undefined, {} | null | undefined>): void;
    getGlossary(request: protos.google.cloud.translation.v3.IGetGlossaryRequest, callback: Callback<protos.google.cloud.translation.v3.IGlossary, protos.google.cloud.translation.v3.IGetGlossaryRequest | null | undefined, {} | null | undefined>): void;
    /**
     * Translates a large volume of text in asynchronous batch mode.
     * This function provides real-time output as the inputs are being processed.
     * If caller cancels a request, the partial results (for an input file, it's
     * all or nothing) may still be available on the specified output location.
     *
     * This call returns immediately and you can
     * use google.longrunning.Operation.name to poll the status of the call.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Location to make a call. Must refer to a caller's project.
     *
     *   Format: `projects/{project-number-or-id}/locations/{location-id}`.
     *
     *   The `global` location is not supported for batch translation.
     *
     *   Only AutoML Translation models or glossaries within the same region (have
     *   the same location-id) can be used, otherwise an INVALID_ARGUMENT (400)
     *   error is returned.
     * @param {string} request.sourceLanguageCode
     *   Required. Source language code.
     * @param {string[]} request.targetLanguageCodes
     *   Required. Specify up to 10 language codes here.
     * @param {number[]} [request.models]
     *   Optional. The models to use for translation. Map's key is target language
     *   code. Map's value is model name. Value can be a built-in general model,
     *   or an AutoML Translation model.
     *
     *   The value format depends on model type:
     *
     *   - AutoML Translation models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
     *
     *   - General (built-in) models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
     *
     *
     *   If the map is empty or a specific model is
     *   not requested for a language pair, then default google model (nmt) is used.
     * @param {number[]} request.inputConfigs
     *   Required. Input configurations.
     *   The total number of files matched should be <= 100.
     *   The total content size should be <= 100M Unicode codepoints.
     *   The files must use UTF-8 encoding.
     * @param {google.cloud.translation.v3.OutputConfig} request.outputConfig
     *   Required. Output configuration.
     *   If 2 input configs match to the same file (that is, same input path),
     *   we don't generate output for duplicate inputs.
     * @param {number[]} [request.glossaries]
     *   Optional. Glossaries to be applied for translation.
     *   It's keyed by target language code.
     * @param {number[]} [request.labels]
     *   Optional. The labels with user-defined metadata for the request.
     *
     *   Label keys and values can be no longer than 63 characters
     *   (Unicode codepoints), can only contain lowercase letters, numeric
     *   characters, underscores and dashes. International characters are allowed.
     *   Label values are optional. Label keys must start with a letter.
     *
     *   See https://cloud.google.com/translate/docs/advanced/labels for more
     *   information.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.batch_translate_text.js</caption>
     * region_tag:translate_v3_generated_TranslationService_BatchTranslateText_async
     */
    batchTranslateText(request?: protos.google.cloud.translation.v3.IBatchTranslateTextRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.cloud.translation.v3.IBatchTranslateResponse, protos.google.cloud.translation.v3.IBatchTranslateMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    batchTranslateText(request: protos.google.cloud.translation.v3.IBatchTranslateTextRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.translation.v3.IBatchTranslateResponse, protos.google.cloud.translation.v3.IBatchTranslateMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    batchTranslateText(request: protos.google.cloud.translation.v3.IBatchTranslateTextRequest, callback: Callback<LROperation<protos.google.cloud.translation.v3.IBatchTranslateResponse, protos.google.cloud.translation.v3.IBatchTranslateMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `batchTranslateText()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.batch_translate_text.js</caption>
     * region_tag:translate_v3_generated_TranslationService_BatchTranslateText_async
     */
    checkBatchTranslateTextProgress(name: string): Promise<LROperation<protos.google.cloud.translation.v3.BatchTranslateResponse, protos.google.cloud.translation.v3.BatchTranslateMetadata>>;
    /**
     * Translates a large volume of document in asynchronous batch mode.
     * This function provides real-time output as the inputs are being processed.
     * If caller cancels a request, the partial results (for an input file, it's
     * all or nothing) may still be available on the specified output location.
     *
     * This call returns immediately and you can use
     * google.longrunning.Operation.name to poll the status of the call.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. Location to make a regional call.
     *
     *   Format: `projects/{project-number-or-id}/locations/{location-id}`.
     *
     *   The `global` location is not supported for batch translation.
     *
     *   Only AutoML Translation models or glossaries within the same region (have
     *   the same location-id) can be used, otherwise an INVALID_ARGUMENT (400)
     *   error is returned.
     * @param {string} request.sourceLanguageCode
     *   Required. The ISO-639 language code of the input document if known, for
     *   example, "en-US" or "sr-Latn". Supported language codes are listed in
     *   [Language Support](https://cloud.google.com/translate/docs/languages).
     * @param {string[]} request.targetLanguageCodes
     *   Required. The ISO-639 language code to use for translation of the input
     *   document. Specify up to 10 language codes here.
     * @param {number[]} request.inputConfigs
     *   Required. Input configurations.
     *   The total number of files matched should be <= 100.
     *   The total content size to translate should be <= 100M Unicode codepoints.
     *   The files must use UTF-8 encoding.
     * @param {google.cloud.translation.v3.BatchDocumentOutputConfig} request.outputConfig
     *   Required. Output configuration.
     *   If 2 input configs match to the same file (that is, same input path),
     *   we don't generate output for duplicate inputs.
     * @param {number[]} [request.models]
     *   Optional. The models to use for translation. Map's key is target language
     *   code. Map's value is the model name. Value can be a built-in general model,
     *   or an AutoML Translation model.
     *
     *   The value format depends on model type:
     *
     *   - AutoML Translation models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
     *
     *   - General (built-in) models:
     *     `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
     *
     *
     *   If the map is empty or a specific model is
     *   not requested for a language pair, then default google model (nmt) is used.
     * @param {number[]} [request.glossaries]
     *   Optional. Glossaries to be applied. It's keyed by target language code.
     * @param {number[]} [request.formatConversions]
     *   Optional. File format conversion map to be applied to all input files.
     *   Map's key is the original mime_type. Map's value is the target mime_type of
     *   translated documents.
     *
     *   Supported file format conversion includes:
     *   - `application/pdf` to
     *     `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
     *
     *   If nothing specified, output files will be in the same format as the
     *   original file.
     * @param {string} [request.customizedAttribution]
     *   Optional. This flag is to support user customized attribution.
     *   If not provided, the default is `Machine Translated by Google`.
     *   Customized attribution should follow rules in
     *   https://cloud.google.com/translate/attribution#attribution_and_logos
     * @param {boolean} [request.enableShadowRemovalNativePdf]
     *   Optional. If true, use the text removal server to remove the shadow text on
     *   background image for native pdf translation.
     *   Shadow removal feature can only be enabled when
     *   is_translate_native_pdf_only: false && pdf_native_only: false
     * @param {boolean} [request.enableRotationCorrection]
     *   Optional. If true, enable auto rotation correction in DVS.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.batch_translate_document.js</caption>
     * region_tag:translate_v3_generated_TranslationService_BatchTranslateDocument_async
     */
    batchTranslateDocument(request?: protos.google.cloud.translation.v3.IBatchTranslateDocumentRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.cloud.translation.v3.IBatchTranslateDocumentResponse, protos.google.cloud.translation.v3.IBatchTranslateDocumentMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    batchTranslateDocument(request: protos.google.cloud.translation.v3.IBatchTranslateDocumentRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.translation.v3.IBatchTranslateDocumentResponse, protos.google.cloud.translation.v3.IBatchTranslateDocumentMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    batchTranslateDocument(request: protos.google.cloud.translation.v3.IBatchTranslateDocumentRequest, callback: Callback<LROperation<protos.google.cloud.translation.v3.IBatchTranslateDocumentResponse, protos.google.cloud.translation.v3.IBatchTranslateDocumentMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `batchTranslateDocument()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.batch_translate_document.js</caption>
     * region_tag:translate_v3_generated_TranslationService_BatchTranslateDocument_async
     */
    checkBatchTranslateDocumentProgress(name: string): Promise<LROperation<protos.google.cloud.translation.v3.BatchTranslateDocumentResponse, protos.google.cloud.translation.v3.BatchTranslateDocumentMetadata>>;
    /**
     * Creates a glossary and returns the long-running operation. Returns
     * NOT_FOUND, if the project doesn't exist.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The project name.
     * @param {google.cloud.translation.v3.Glossary} request.glossary
     *   Required. The glossary to create.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.create_glossary.js</caption>
     * region_tag:translate_v3_generated_TranslationService_CreateGlossary_async
     */
    createGlossary(request?: protos.google.cloud.translation.v3.ICreateGlossaryRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.cloud.translation.v3.IGlossary, protos.google.cloud.translation.v3.ICreateGlossaryMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    createGlossary(request: protos.google.cloud.translation.v3.ICreateGlossaryRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.translation.v3.IGlossary, protos.google.cloud.translation.v3.ICreateGlossaryMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    createGlossary(request: protos.google.cloud.translation.v3.ICreateGlossaryRequest, callback: Callback<LROperation<protos.google.cloud.translation.v3.IGlossary, protos.google.cloud.translation.v3.ICreateGlossaryMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `createGlossary()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.create_glossary.js</caption>
     * region_tag:translate_v3_generated_TranslationService_CreateGlossary_async
     */
    checkCreateGlossaryProgress(name: string): Promise<LROperation<protos.google.cloud.translation.v3.Glossary, protos.google.cloud.translation.v3.CreateGlossaryMetadata>>;
    /**
     * Deletes a glossary, or cancels glossary construction
     * if the glossary isn't created yet.
     * Returns NOT_FOUND, if the glossary doesn't exist.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.name
     *   Required. The name of the glossary to delete.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is an object representing
     *   a long running operation. Its `promise()` method returns a promise
     *   you can `await` for.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.delete_glossary.js</caption>
     * region_tag:translate_v3_generated_TranslationService_DeleteGlossary_async
     */
    deleteGlossary(request?: protos.google.cloud.translation.v3.IDeleteGlossaryRequest, options?: CallOptions): Promise<[
        LROperation<protos.google.cloud.translation.v3.IDeleteGlossaryResponse, protos.google.cloud.translation.v3.IDeleteGlossaryMetadata>,
        protos.google.longrunning.IOperation | undefined,
        {} | undefined
    ]>;
    deleteGlossary(request: protos.google.cloud.translation.v3.IDeleteGlossaryRequest, options: CallOptions, callback: Callback<LROperation<protos.google.cloud.translation.v3.IDeleteGlossaryResponse, protos.google.cloud.translation.v3.IDeleteGlossaryMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    deleteGlossary(request: protos.google.cloud.translation.v3.IDeleteGlossaryRequest, callback: Callback<LROperation<protos.google.cloud.translation.v3.IDeleteGlossaryResponse, protos.google.cloud.translation.v3.IDeleteGlossaryMetadata>, protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
    /**
     * Check the status of the long running operation returned by `deleteGlossary()`.
     * @param {String} name
     *   The operation name that will be passed.
     * @returns {Promise} - The promise which resolves to an object.
     *   The decoded operation object has result and metadata field to get information from.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.delete_glossary.js</caption>
     * region_tag:translate_v3_generated_TranslationService_DeleteGlossary_async
     */
    checkDeleteGlossaryProgress(name: string): Promise<LROperation<protos.google.cloud.translation.v3.DeleteGlossaryResponse, protos.google.cloud.translation.v3.DeleteGlossaryMetadata>>;
    /**
     * Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't
     * exist.
     *
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the project from which to list all of the glossaries.
     * @param {number} [request.pageSize]
     *   Optional. Requested page size. The server may return fewer glossaries than
     *   requested. If unspecified, the server picks an appropriate default.
     * @param {string} [request.pageToken]
     *   Optional. A token identifying a page of results the server should return.
     *   Typically, this is the value of [ListGlossariesResponse.next_page_token]
     *   returned from the previous call to `ListGlossaries` method.
     *   The first page is returned if `page_token`is empty or missing.
     * @param {string} [request.filter]
     *   Optional. Filter specifying constraints of a list operation.
     *   Specify the constraint by the format of "key=value", where key must be
     *   "src" or "tgt", and the value must be a valid language code.
     *   For multiple restrictions, concatenate them by "AND" (uppercase only),
     *   such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used
     *   here, which means using 'en-US' and 'en' can lead to different results,
     *   which depends on the language code you used when you create the glossary.
     *   For the unidirectional glossaries, the "src" and "tgt" add restrictions
     *   on the source and target language code separately.
     *   For the equivalent term set glossaries, the "src" and/or "tgt" add
     *   restrictions on the term set.
     *   For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional
     *   glossaries which exactly match the source language code as "en-US" and the
     *   target language code "zh-CN", but all equivalent term set glossaries which
     *   contain "en-US" and "zh-CN" in their language set will be picked.
     *   If missing, no filtering is performed.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Promise} - The promise which resolves to an array.
     *   The first element of the array is Array of {@link protos.google.cloud.translation.v3.Glossary|Glossary}.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed and will merge results from all the pages into this array.
     *   Note that it can affect your quota.
     *   We recommend using `listGlossariesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listGlossaries(request?: protos.google.cloud.translation.v3.IListGlossariesRequest, options?: CallOptions): Promise<[
        protos.google.cloud.translation.v3.IGlossary[],
        protos.google.cloud.translation.v3.IListGlossariesRequest | null,
        protos.google.cloud.translation.v3.IListGlossariesResponse
    ]>;
    listGlossaries(request: protos.google.cloud.translation.v3.IListGlossariesRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.translation.v3.IListGlossariesRequest, protos.google.cloud.translation.v3.IListGlossariesResponse | null | undefined, protos.google.cloud.translation.v3.IGlossary>): void;
    listGlossaries(request: protos.google.cloud.translation.v3.IListGlossariesRequest, callback: PaginationCallback<protos.google.cloud.translation.v3.IListGlossariesRequest, protos.google.cloud.translation.v3.IListGlossariesResponse | null | undefined, protos.google.cloud.translation.v3.IGlossary>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the project from which to list all of the glossaries.
     * @param {number} [request.pageSize]
     *   Optional. Requested page size. The server may return fewer glossaries than
     *   requested. If unspecified, the server picks an appropriate default.
     * @param {string} [request.pageToken]
     *   Optional. A token identifying a page of results the server should return.
     *   Typically, this is the value of [ListGlossariesResponse.next_page_token]
     *   returned from the previous call to `ListGlossaries` method.
     *   The first page is returned if `page_token`is empty or missing.
     * @param {string} [request.filter]
     *   Optional. Filter specifying constraints of a list operation.
     *   Specify the constraint by the format of "key=value", where key must be
     *   "src" or "tgt", and the value must be a valid language code.
     *   For multiple restrictions, concatenate them by "AND" (uppercase only),
     *   such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used
     *   here, which means using 'en-US' and 'en' can lead to different results,
     *   which depends on the language code you used when you create the glossary.
     *   For the unidirectional glossaries, the "src" and "tgt" add restrictions
     *   on the source and target language code separately.
     *   For the equivalent term set glossaries, the "src" and/or "tgt" add
     *   restrictions on the term set.
     *   For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional
     *   glossaries which exactly match the source language code as "en-US" and the
     *   target language code "zh-CN", but all equivalent term set glossaries which
     *   contain "en-US" and "zh-CN" in their language set will be picked.
     *   If missing, no filtering is performed.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing {@link protos.google.cloud.translation.v3.Glossary|Glossary} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listGlossariesAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     */
    listGlossariesStream(request?: protos.google.cloud.translation.v3.IListGlossariesRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listGlossaries`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The name of the project from which to list all of the glossaries.
     * @param {number} [request.pageSize]
     *   Optional. Requested page size. The server may return fewer glossaries than
     *   requested. If unspecified, the server picks an appropriate default.
     * @param {string} [request.pageToken]
     *   Optional. A token identifying a page of results the server should return.
     *   Typically, this is the value of [ListGlossariesResponse.next_page_token]
     *   returned from the previous call to `ListGlossaries` method.
     *   The first page is returned if `page_token`is empty or missing.
     * @param {string} [request.filter]
     *   Optional. Filter specifying constraints of a list operation.
     *   Specify the constraint by the format of "key=value", where key must be
     *   "src" or "tgt", and the value must be a valid language code.
     *   For multiple restrictions, concatenate them by "AND" (uppercase only),
     *   such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used
     *   here, which means using 'en-US' and 'en' can lead to different results,
     *   which depends on the language code you used when you create the glossary.
     *   For the unidirectional glossaries, the "src" and "tgt" add restrictions
     *   on the source and target language code separately.
     *   For the equivalent term set glossaries, the "src" and/or "tgt" add
     *   restrictions on the term set.
     *   For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional
     *   glossaries which exactly match the source language code as "en-US" and the
     *   target language code "zh-CN", but all equivalent term set glossaries which
     *   contain "en-US" and "zh-CN" in their language set will be picked.
     *   If missing, no filtering is performed.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
     *   When you iterate the returned iterable, each element will be an object representing
     *   {@link protos.google.cloud.translation.v3.Glossary|Glossary}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
     *   for more details and examples.
     * @example <caption>include:samples/generated/v3/translation_service.list_glossaries.js</caption>
     * region_tag:translate_v3_generated_TranslationService_ListGlossaries_async
     */
    listGlossariesAsync(request?: protos.google.cloud.translation.v3.IListGlossariesRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.translation.v3.IGlossary>;
    /**
     * Return a fully-qualified glossary resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} glossary
     * @returns {string} Resource name string.
     */
    glossaryPath(project: string, location: string, glossary: string): string;
    /**
     * Parse the project from Glossary resource.
     *
     * @param {string} glossaryName
     *   A fully-qualified path representing Glossary resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromGlossaryName(glossaryName: string): string | number;
    /**
     * Parse the location from Glossary resource.
     *
     * @param {string} glossaryName
     *   A fully-qualified path representing Glossary resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromGlossaryName(glossaryName: string): string | number;
    /**
     * Parse the glossary from Glossary resource.
     *
     * @param {string} glossaryName
     *   A fully-qualified path representing Glossary resource.
     * @returns {string} A string representing the glossary.
     */
    matchGlossaryFromGlossaryName(glossaryName: string): string | number;
    /**
     * Return a fully-qualified location resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @returns {string} Resource name string.
     */
    locationPath(project: string, location: string): string;
    /**
     * Parse the project from Location resource.
     *
     * @param {string} locationName
     *   A fully-qualified path representing Location resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromLocationName(locationName: string): string | number;
    /**
     * Parse the location from Location resource.
     *
     * @param {string} locationName
     *   A fully-qualified path representing Location resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromLocationName(locationName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}
