import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayButton from '@clayui/button';

import mainAccountLogo from '../../assets/icons/mainAppLogo.svg';
import emptyImage from '../../assets/icons/emptyImage.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import circleFill from '../../assets/icons/circle_fill.svg';

import './NewAppToolBar.scss';

interface NewAppToolBarProps {
    accountName: string
    appName?: string
    appImage?: string
    accountImage?: string;
}

export function NewAppToolBar({
    accountName,
    appName,
    appImage,
    accountImage,
}: NewAppToolBarProps) {
    return (
        <div className='new-app-tool-bar-container'>
            <ClayManagementToolbar.ItemList expand>
                <div className='new-app-tool-bar-main-account-logo'>
                    <img 
                        className='new-app-tool-bar-main-account-logo-img' 
                        src={accountImage ?? mainAccountLogo}  
                        alt='Main account logo'
                    />
                    <span 
                        className='new-app-tool-bar-main-account-logo-text'
                    >
                        {accountName}
                    </span>
                </div>

                <img 
                    className='new-app-tool-bar-arrow-right' 
                    src={chevronRight} 
                    alt="Arrow right" 
                />

                <div className='new-app-tool-bar-new-app-logo'>
                    <img 
                        className='new-app-tool-bar-new-app-logo-img' 
                        src={appImage ?? emptyImage} 
                        alt="New App logo" 
                    />
                    <span 
                        className='new-app-tool-bar-new-app-logo-text'
                    >
                       {appName ?? 'New App'}
                    </span>
                </div>

            </ClayManagementToolbar.ItemList>

            <ClayManagementToolbar.ItemList expand>
                <div className='new-app-tool-bar-status-container'>
                    <img
                        className='new-app-tool-bar-status-icon'
                        src={circleFill} 
                        alt="Status" 
                    />
                    <span
                        className='new-app-tool-bar-status-text'
                    >
                        Draft
                    </span>
                </div>
            </ClayManagementToolbar.ItemList>

            <ClayManagementToolbar.ItemList> 
                <ClayButton.Group className='new-app-tool-bar-button-container'>
                    <ClayButton 
                        className='new-app-tool-bar-button-exit'
                        displayType={null}
                    >
                        <span
                            className='new-app-tool-bar-button-text'
                        >
                            Exit
                        </span>
                    </ClayButton>
                    <ClayButton
                        rounded
                        className='new-app-tool-bar-button-save-draft'
                        displayType='secondary'
                    >
                        <span
                            className='new-app-tool-bar-button-text'
                        >
                            Save as draft
                        </span> 
                    </ClayButton>
                    <ClayButton 
                        className='new-app-tool-bar-button-preview-storefront'
                        rounded
                        displayType='secondary'
                    >
                       <span
                            className='new-app-tool-bar-button-text'
                       >
                            Preview Storefront
                        </span>
                    </ClayButton>
                </ClayButton.Group>
            </ClayManagementToolbar.ItemList>
        </div>
    );
}
