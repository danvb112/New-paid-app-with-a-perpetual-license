import ClayManagementToolbar from '@clayui/management-toolbar';
import ClayButton from '@clayui/button';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

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
                        onClick={() => navigate('/')}
                    >
                        <span
                            className='new-app-tool-bar-button-text'
                        >
                            Exit
                        </span>
                    </ClayButton>

                    <button
                        className='new-app-tool-bar-button-save-draft'
                    >
                        Save as draft
                    </button>

                    <button
                        className='new-app-tool-bar-button-preview-storefront'
                    >
                        Preview Storefront
                    </button>
                </ClayButton.Group>
            </ClayManagementToolbar.ItemList>
        </div>
    );
}
