/**
 * @author WMXPY
 * @namespace BinaryStorage
 * @description Definition
 */

import { IMBRICATE_CAPABILITY_EFFECT, ImbricateCapability } from "../capability/definition";

export type ImbricateBinaryStorageCapability =
    Record<IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY, ImbricateCapability>;

export enum IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY {

    UPLOAD_FILE = "imbricate.binary.storage.upload",
}

export const createAllAllowImbricateBinaryStorageCapability = (): ImbricateBinaryStorageCapability => {

    return {
        [IMBRICATE_BINARY_STORAGE_CAPABILITY_KEY.UPLOAD_FILE]: {
            effect: IMBRICATE_CAPABILITY_EFFECT.ALLOW,
        },
    };
};