import './NewAppPageFooterButtons.scss';

interface NewAppPageFooterButtonsProps {
    continueButtonText?: string;
    onCLickBack?: () => void;
    onClickContinue: () => void;
    showBackButton?: boolean;
}

export function NewAppPageFooterButtons({
    continueButtonText = "Continue",
    onCLickBack,
    onClickContinue,
    showBackButton = true,
}: NewAppPageFooterButtonsProps) {
    return (
        <div className='new-app-page-footer-button-container'>
            {showBackButton && (
                <button
                    className='new-app-page-footer-button-back'
                    onClick={() => onCLickBack && onCLickBack()}
                >
                    Back
                </button>
            )}

            <button
                className='new-app-page-footer-button-continue'
                onClick={() => onClickContinue()}
            >
                {continueButtonText}
            </button>
        </div>
    );
}