/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "doMath(uint64,uint64,string)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "hello(string)string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjEwMy4wCi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGdvcmFuZGZvdW5kYXRpb24vVEVBTFNjcmlwdAoKLy8gVGhpcyBjb250cmFjdCBpcyBjb21wbGlhbnQgd2l0aCBhbmQvb3IgaW1wbGVtZW50cyB0aGUgZm9sbG93aW5nIEFSQ3M6IFsgQVJDNCBdCgovLyBUaGUgZm9sbG93aW5nIHRlbiBsaW5lcyBvZiBURUFMIGhhbmRsZSBpbml0aWFsIHByb2dyYW0gZmxvdwovLyBUaGlzIHBhdHRlcm4gaXMgdXNlZCB0byBtYWtlIGl0IGVhc3kgZm9yIGFueW9uZSB0byBwYXJzZSB0aGUgc3RhcnQgb2YgdGhlIHByb2dyYW0gYW5kIGRldGVybWluZSBpZiBhIHNwZWNpZmljIGFjdGlvbiBpcyBhbGxvd2VkCi8vIEhlcmUsIGFjdGlvbiByZWZlcnMgdG8gdGhlIE9uQ29tcGxldGUgaW4gY29tYmluYXRpb24gd2l0aCB3aGV0aGVyIHRoZSBhcHAgaXMgYmVpbmcgY3JlYXRlZCBvciBjYWxsZWQKLy8gRXZlcnkgcG9zc2libGUgYWN0aW9uIGZvciB0aGlzIGNvbnRyYWN0IGlzIHJlcHJlc2VudGVkIGluIHRoZSBzd2l0Y2ggc3RhdGVtZW50Ci8vIElmIHRoZSBhY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlc3BlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIipOT1RfSU1QTEVNRU5URUQiIHdoaWNoIGp1c3QgY29udGFpbnMgImVyciIKdHhuIEFwcGxpY2F0aW9uSUQKIQppbnQgNgoqCnR4biBPbkNvbXBsZXRpb24KKwpzd2l0Y2ggKmNhbGxfTm9PcCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKmNyZWF0ZV9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRAoKKk5PVF9JTVBMRU1FTlRFRDoKCS8vIFRoZSByZXF1ZXN0ZWQgYWN0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIGNvbnRyYWN0LiBBcmUgeW91IHVzaW5nIHRoZSBjb3JyZWN0IE9uQ29tcGxldGU/IERpZCB5b3Ugc2V0IHlvdXIgYXBwIElEPwoJZXJyCgovLyBnZXRTdW0oYTogdWludDY0LCBiOiB1aW50NjQpOiB1aW50NjQKLy8KLy8gQ2FsY3VsYXRlcyB0aGUgc3VtIG9mIHR3byBudW1iZXJzCi8vCi8vIEBwYXJhbSBhCi8vIEBwYXJhbSBiCi8vIEByZXR1cm5zIFRoZSBzdW0gb2YgYSBhbmQgYgpnZXRTdW06Cglwcm90byAyIDEKCgkvLyBjb250cmFjdHMvQ29iYUZ1bGxTdGFja1dlYlRpZ2EuYWxnby50czoxMgoJLy8gcmV0dXJuIGEgKyBiOwoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NAoJZnJhbWVfZGlnIC0yIC8vIGI6IHVpbnQ2NAoJKwoJcmV0c3ViCgovLyBnZXREaWZmZXJlbmNlKGE6IHVpbnQ2NCwgYjogdWludDY0KTogdWludDY0Ci8vCi8vIENhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gbnVtYmVycwovLwovLyBAcGFyYW0gYQovLyBAcGFyYW0gYgovLyBAcmV0dXJucyBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgYW5kIGIuCmdldERpZmZlcmVuY2U6Cglwcm90byAyIDEKCgkvLyBjb250cmFjdHMvQ29iYUZ1bGxTdGFja1dlYlRpZ2EuYWxnby50czoyMwoJLy8gcmV0dXJuIGEgPj0gYiA/IGEgLSBiIDogYiAtIGE7CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CglmcmFtZV9kaWcgLTIgLy8gYjogdWludDY0Cgk+PQoJYnogKnRlcm5hcnkwX2ZhbHNlCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CglmcmFtZV9kaWcgLTIgLy8gYjogdWludDY0CgktCgliICp0ZXJuYXJ5MF9lbmQKCip0ZXJuYXJ5MF9mYWxzZToKCWZyYW1lX2RpZyAtMiAvLyBiOiB1aW50NjQKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjQKCS0KCip0ZXJuYXJ5MF9lbmQ6CglyZXRzdWIKCi8vIGRvTWF0aCh1aW50NjQsdWludDY0LHN0cmluZyl1aW50NjQKKmFiaV9yb3V0ZV9kb01hdGg6CgkvLyBUaGUgQUJJIHJldHVybiBwcmVmaXgKCWJ5dGUgMHgxNTFmN2M3NQoKCS8vIG9wZXJhdGlvbjogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAzCglleHRyYWN0IDIgMAoKCS8vIGI6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJYnRvaQoKCS8vIGE6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoKCS8vIGV4ZWN1dGUgZG9NYXRoKHVpbnQ2NCx1aW50NjQsc3RyaW5nKXVpbnQ2NAoJY2FsbHN1YiBkb01hdGgKCWl0b2IKCWNvbmNhdAoJbG9nCglpbnQgMQoJcmV0dXJuCgovLyBkb01hdGgoYTogdWludDY0LCBiOiB1aW50NjQsIG9wZXJhdGlvbjogc3RyaW5nKTogdWludDY0Ci8vCi8vIEEgbWV0aG9kIHRoYXQgdGFrZXMgdHdvIG51bWJlcnMgYW5kIGRvZXMgZWl0aGVyIGFkZGl0aW9uIG9yIHN1YnRyYWN0aW9uCi8vCi8vIEBwYXJhbSBhIFRoZSBmaXJzdCB1aW50NjQKLy8gQHBhcmFtIGIgVGhlIHNlY29uZCB1aW50NjQKLy8gQHBhcmFtIG9wZXJhdGlvbiBUaGUgb3BlcmF0aW9uIHRvIHBlcmZvcm0uIENhbiBiZSBlaXRoZXIgJ3N1bScgb3IgJ2RpZmZlcmVuY2UnCi8vCi8vIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvbgpkb01hdGg6Cglwcm90byAzIDEKCgkvLyBQdXNoIGVtcHR5IGJ5dGVzIGFmdGVyIHRoZSBmcmFtZSBwb2ludGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIGxvY2FsIHZhcmlhYmxlcwoJYnl0ZSAweAoKCS8vICppZjBfY29uZGl0aW9uCgkvLyBjb250cmFjdHMvQ29iYUZ1bGxTdGFja1dlYlRpZ2EuYWxnby50czozOAoJLy8gb3BlcmF0aW9uID09PSAnc3VtJwoJZnJhbWVfZGlnIC0zIC8vIG9wZXJhdGlvbjogc3RyaW5nCglieXRlIDB4NzM3NTZkIC8vICJzdW0iCgk9PQoJYnogKmlmMF9lbHNlaWYxX2NvbmRpdGlvbgoKCS8vICppZjBfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL0NvYmFGdWxsU3RhY2tXZWJUaWdhLmFsZ28udHM6MzkKCS8vIHJlc3VsdCA9IHRoaXMuZ2V0U3VtKGEsIGIpCglmcmFtZV9kaWcgLTIgLy8gYjogdWludDY0CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CgljYWxsc3ViIGdldFN1bQoJZnJhbWVfYnVyeSAwIC8vIHJlc3VsdDogdWludDY0CgliICppZjBfZW5kCgoqaWYwX2Vsc2VpZjFfY29uZGl0aW9uOgoJLy8gY29udHJhY3RzL0NvYmFGdWxsU3RhY2tXZWJUaWdhLmFsZ28udHM6NDAKCS8vIG9wZXJhdGlvbiA9PT0gJ2RpZmZlcmVuY2UnCglmcmFtZV9kaWcgLTMgLy8gb3BlcmF0aW9uOiBzdHJpbmcKCWJ5dGUgMHg2NDY5NjY2NjY1NzI2NTZlNjM2NSAvLyAiZGlmZmVyZW5jZSIKCT09CglieiAqaWYwX2Vsc2UKCgkvLyAqaWYwX2Vsc2VpZjFfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL0NvYmFGdWxsU3RhY2tXZWJUaWdhLmFsZ28udHM6NDEKCS8vIHJlc3VsdCA9IHRoaXMuZ2V0RGlmZmVyZW5jZShhLCBiKQoJZnJhbWVfZGlnIC0yIC8vIGI6IHVpbnQ2NAoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NAoJY2FsbHN1YiBnZXREaWZmZXJlbmNlCglmcmFtZV9idXJ5IDAgLy8gcmVzdWx0OiB1aW50NjQKCWIgKmlmMF9lbmQKCippZjBfZWxzZToKCS8vIEludmFsaWQgb3BlcmF0aW9uCgllcnIKCippZjBfZW5kOgoJLy8gY29udHJhY3RzL0NvYmFGdWxsU3RhY2tXZWJUaWdhLmFsZ28udHM6NDQKCS8vIHJldHVybiByZXN1bHQ7CglmcmFtZV9kaWcgMCAvLyByZXN1bHQ6IHVpbnQ2NAoKCS8vIHNldCB0aGUgc3Vicm91dGluZSByZXR1cm4gdmFsdWUKCWZyYW1lX2J1cnkgMAoJcmV0c3ViCgovLyBoZWxsbyhzdHJpbmcpc3RyaW5nCiphYmlfcm91dGVfaGVsbG86CgkvLyBUaGUgQUJJIHJldHVybiBwcmVmaXgKCWJ5dGUgMHgxNTFmN2M3NQoKCS8vIG5hbWU6IHN0cmluZwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZXh0cmFjdCAyIDAKCgkvLyBleGVjdXRlIGhlbGxvKHN0cmluZylzdHJpbmcKCWNhbGxzdWIgaGVsbG8KCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0Cgljb25jYXQKCWxvZwoJaW50IDEKCXJldHVybgoKLy8gaGVsbG8obmFtZTogc3RyaW5nKTogc3RyaW5nCi8vCi8vIEEgZGVtb25zdHJhdGlvbiBtZXRob2QgdXNlZCBpbiB0aGUgQWxnb0tpdCBmdWxsc3RhY2sgdGVtcGxhdGUuCi8vIEdyZWV0cyB0aGUgdXNlciBieSBuYW1lLgovLwovLyBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdXNlciB0byBncmVldC4KLy8gQHJldHVybnMgQSBncmVldGluZyBtZXNzYWdlIHRvIHRoZSB1c2VyLgpoZWxsbzoKCXByb3RvIDEgMQoKCS8vIGNvbnRyYWN0cy9Db2JhRnVsbFN0YWNrV2ViVGlnYS5hbGdvLnRzOjU1CgkvLyByZXR1cm4gJ0hlbGxvLCAnICsgbmFtZTsKCWJ5dGUgMHg0ODY1NmM2YzZmMmMyMCAvLyAiSGVsbG8sICIKCWZyYW1lX2RpZyAtMSAvLyBuYW1lOiBzdHJpbmcKCWNvbmNhdAoJcmV0c3ViCgoqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uOgoJaW50IDEKCXJldHVybgoKKmNyZWF0ZV9Ob09wOgoJbWV0aG9kICJjcmVhdGVBcHBsaWNhdGlvbigpdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY3JlYXRlIE5vT3AKCWVycgoKKmNhbGxfTm9PcDoKCW1ldGhvZCAiZG9NYXRoKHVpbnQ2NCx1aW50NjQsc3RyaW5nKXVpbnQ2NCIKCW1ldGhvZCAiaGVsbG8oc3RyaW5nKXN0cmluZyIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfZG9NYXRoICphYmlfcm91dGVfaGVsbG8KCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY2FsbCBOb09wCgllcnI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "CobaFullStackWebTiga",
    "desc": "",
    "methods": [
      {
        "name": "doMath",
        "desc": "A method that takes two numbers and does either addition or subtraction",
        "args": [
          {
            "name": "a",
            "type": "uint64",
            "desc": "The first uint64"
          },
          {
            "name": "b",
            "type": "uint64",
            "desc": "The second uint64"
          },
          {
            "name": "operation",
            "type": "string",
            "desc": "The operation to perform. Can be either 'sum' or 'difference'"
          }
        ],
        "returns": {
          "type": "uint64",
          "desc": "The result of the operation"
        }
      },
      {
        "name": "hello",
        "desc": "A demonstration method used in the AlgoKit fullstack template.\nGreets the user by name.",
        "args": [
          {
            "name": "name",
            "type": "string",
            "desc": "The name of the user to greet."
          }
        ],
        "returns": {
          "type": "string",
          "desc": "A greeting message to the user."
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

/**
 * Defines the types of available calls and state of the CobaFullStackWebTiga smart contract.
 */
export type CobaFullStackWebTiga = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'doMath(uint64,uint64,string)uint64' | 'doMath', {
      argsObj: {
        /**
         * The first uint64
         */
        a: bigint | number
        /**
         * The second uint64
         */
        b: bigint | number
        /**
         * The operation to perform. Can be either 'sum' or 'difference'
         */
        operation: string
      }
      argsTuple: [a: bigint | number, b: bigint | number, operation: string]
      /**
       * The result of the operation
       */
      returns: bigint
    }>
    & Record<'hello(string)string' | 'hello', {
      argsObj: {
        /**
         * The name of the user to greet.
         */
        name: string
      }
      argsTuple: [name: string]
      /**
       * A greeting message to the user.
       */
      returns: string
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type CobaFullStackWebTigaSig = keyof CobaFullStackWebTiga['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends CobaFullStackWebTigaSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the CobaFullStackWebTiga smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends CobaFullStackWebTigaSig> = CobaFullStackWebTiga['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the CobaFullStackWebTiga smart contract to the method's return type
 */
export type MethodReturn<TSignature extends CobaFullStackWebTigaSig> = CobaFullStackWebTiga['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type CobaFullStackWebTigaCreateCalls = (typeof CobaFullStackWebTigaCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type CobaFullStackWebTigaCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type CobaFullStackWebTigaDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: CobaFullStackWebTigaCreateCalls) => CobaFullStackWebTigaCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class CobaFullStackWebTigaCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the CobaFullStackWebTiga smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the doMath(uint64,uint64,string)uint64 ABI method
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'doMath(uint64,uint64,string)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b, args.operation],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the hello(string)string ABI method
   *
   * A demonstration method used in the AlgoKit fullstack template.
Greets the user by name.
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'hello(string)string' as const,
      methodArgs: Array.isArray(args) ? args : [args.name],
      ...params,
    }
  }
}

/**
 * A client to make calls to the CobaFullStackWebTiga smart contract
 */
export class CobaFullStackWebTigaClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `CobaFullStackWebTigaClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof CobaFullStackWebTiga['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the CobaFullStackWebTiga smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: CobaFullStackWebTigaDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(CobaFullStackWebTigaCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the CobaFullStackWebTiga smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<MethodReturn<'createApplication()void'>, AppCreateCallTransactionResult>(await $this.appClient.create(CobaFullStackWebTigaCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the CobaFullStackWebTiga smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the doMath(uint64,uint64,string)uint64 ABI method.
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The result of the operation
   */
  public doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CobaFullStackWebTigaCallFactory.doMath(args, params))
  }

  /**
   * Calls the hello(string)string ABI method.
   *
   * A demonstration method used in the AlgoKit fullstack template.
Greets the user by name.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: A greeting message to the user.
   */
  public hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(CobaFullStackWebTigaCallFactory.hello(args, params))
  }

  public compose(): CobaFullStackWebTigaComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.doMath(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      hello(args: MethodArgs<'hello(string)string'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.hello(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as CobaFullStackWebTigaComposer
  }
}
export type CobaFullStackWebTigaComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the doMath(uint64,uint64,string)uint64 ABI method.
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): CobaFullStackWebTigaComposer<[...TReturns, MethodReturn<'doMath(uint64,uint64,string)uint64'>]>

  /**
   * Calls the hello(string)string ABI method.
   *
   * A demonstration method used in the AlgoKit fullstack template.
Greets the user by name.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  hello(args: MethodArgs<'hello(string)string'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): CobaFullStackWebTigaComposer<[...TReturns, MethodReturn<'hello(string)string'>]>

  /**
   * Makes a clear_state call to an existing instance of the CobaFullStackWebTiga smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): CobaFullStackWebTigaComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): CobaFullStackWebTigaComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<CobaFullStackWebTigaComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<CobaFullStackWebTigaComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type CobaFullStackWebTigaComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type CobaFullStackWebTigaComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
