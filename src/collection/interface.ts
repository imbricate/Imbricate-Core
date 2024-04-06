/**
 * @author WMXPY
 * @namespace Origin_Collection
 * @description Interface
 */

import { PromiseOr } from "../definition/promise";
import { ImbricatePageMetadata, ImbricatePageSearchSnippet, ImbricatePageSnapshot } from "../page/definition";
import { IImbricatePage } from "../page/interface";
import { IMBRICATE_COLLECTION_EVENT_TYPE, IMBRICATE_COLLECTION_TRIGGER_TYPE, ImbricateCollectionEvent } from "./definition";

export interface IImbricateOriginCollection {

    readonly collectionName: string;
    readonly description?: string;

    readonly events: Array<ImbricateCollectionEvent<IMBRICATE_COLLECTION_TRIGGER_TYPE>>;

    attachEvent(event: ImbricateCollectionEvent<IMBRICATE_COLLECTION_TRIGGER_TYPE>): PromiseOr<void>;
    getEventsByEventType(eventType: IMBRICATE_COLLECTION_EVENT_TYPE): PromiseOr<Array<ImbricateCollectionEvent<IMBRICATE_COLLECTION_TRIGGER_TYPE>>>;
    triggerEvent(eventType: IMBRICATE_COLLECTION_EVENT_TYPE, payload: any): PromiseOr<void>;

    createPage(title: string, initialContent?: string): PromiseOr<IImbricatePage>;
    putPage(pageMetadata: ImbricatePageMetadata, content: string): PromiseOr<IImbricatePage>;
    retitlePage(identifier: string, newTitle: string): PromiseOr<void>;
    deletePage(identifier: string, title: string): PromiseOr<void>;
    hasPage(title: string): PromiseOr<boolean>;
    getPage(identifier: string): PromiseOr<IImbricatePage | null>;
    listPages(): PromiseOr<ImbricatePageSnapshot[]>;
    searchPages(keyword: string): PromiseOr<ImbricatePageSearchSnippet[]>;
}
