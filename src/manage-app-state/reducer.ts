import { InitialStateProps } from "./AppManageState";
import { TYPES } from "./actionTypes";
import {
  createApp,
  createSpecification,
  createProductSpecification,
  patchAppByExternalReferenceCode,
  submitAttachment,
  submitImage,
} from "../utils/api";
import { update } from "lodash";

export type TAction = {
  payload?: any;
  type: TYPES;
};

export function appReducer(state: InitialStateProps, action: TAction) {
  switch (action.type) {
    case TYPES.SUBMIT_APP: {
      return state;
    }
    case TYPES.SUBMIT_APP_BUILD: {
      const { appType, appId, appProductId } = state;

      const submitAppBuild = async () => {
        const dataSpecification = await createSpecification({
          body: {
            key: "type",
            title: { en_US: "Type" },
          },
        });

        createProductSpecification({
          body: {
            productId: appProductId,
            specificationId: dataSpecification.id,
            specificationKey: dataSpecification.key,
            value: { en_US: appType },
          },
          appId,
        });
      };

      submitAppBuild();
    }
    case TYPES.SUBMIT_APP_LICENSING: {
      return state;
    }
    case TYPES.SUBMIT_APP_PROFILE: {
      const { appId, appProductId, appERC, appWorkflowStatusInfo } =
        action.payload.value;

      return {
        ...state,
        appId,
        appProductId,
        appERC,
        appWorkflowStatusInfo,
      };
    }
    case TYPES.SUBMIT_APP_STOREFRONT: {
      return state;
    }
    case TYPES.SUBMIT_APP_SUPPORT: {
      return state;
    }
    case TYPES.SUBMIT_APP_VERSION: {
      return state;
    }
    case TYPES.UPDATE_APP_BUILD: {
      const appBuild = action.payload.value;

      return { ...state, appBuild };
    }
    case TYPES.UPDATE_APP_CATEGORIES: {
      const appCategories = action.payload.value;

      return { ...state, appCategories };
    }
    case TYPES.UPDATE_APP_DESCRIPTION: {
      const appDescription = action.payload.value;

      return { ...state, appDescription };
    }
    case TYPES.UPDATE_APP_DOCUMENTATION_URL: {
      return state;
    }
    case TYPES.UPDATE_APP_INSTALLATION_AND_UNINSTALLATION_GUIDE_URL: {
      return state;
    }
    case TYPES.UPDATE_APP_LICENSE: {
      return state;
    }
    case TYPES.UPDATE_APP_LICENSE_PRICE: {
      return state;
    }
    case TYPES.UPDATE_APP_LOGO: {
      const appLogo = action.payload.file;

      return { ...state, appLogo };
    }
    case TYPES.UPLOAD_APP_LPKG: {
      return state;
    }
    case TYPES.UPDATE_APP_LXC_COMPATIBILITY: {
      const LXC_Compatibility = action.payload.value;

      return { ...state, appType: LXC_Compatibility };
    }
    case TYPES.UPDATE_APP_NAME: {
      const appName = action.payload.value;

      return { ...state, appName };
    }
    case TYPES.UPDATE_APP_NOTES: {
      return state;
    }
    case TYPES.UPDATE_APP_PRICE_MODEL: {
      const priceModel = action.payload.value;

      return { ...state, priceModel };
    }
    case TYPES.UPDATE_APP_PUBLISHER_WEBSITE_URL: {
      return state;
    }
    case TYPES.UPLOAD_APP_STOREFRONT_IMAGES: {
      return state;
    }
    case TYPES.UPDATE_APP_SUPPORT_URL: {
      return state;
    }
    case TYPES.UPDATE_APP_TAGS: {
      return state;
    }
    case TYPES.UPDATE_APP_TRIAL_INFO: {
      return state;
    }
    case TYPES.UPDATE_APP_USAGE_TERMS_URL: {
      return state;
    }
    case TYPES.UPDATE_APP_VERSION: {
      return state;
    }
    default:
      return state;
  }
}
