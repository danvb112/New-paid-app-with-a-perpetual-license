import githubIcon from '../../assets/icons/github-icon.svg'
import linkIcon from '../../assets/icons/link-icon.svg'

import AutoComplete from '../AutoComplete';
import ClayButton from '@clayui/button';

import './GitHubCard.scss';

interface GitHubCard {
    disabled?: boolean;
    selected?: boolean;
    setSelected?: (value: string) => void
    user? : string;
    value?: object;
}

export function GitHubCard({
    disabled,
    selected,
    setSelected,
    user,
    value
} : GitHubCard){
    return (
        <div className='github-card-container'>
            <div className='github-card-title'>
                <div className='github-card-title-icon-circle'>
                    <img
                        className='github-card-title-icon-github'
                        src={githubIcon}  
                    />
                </div>
                <img 
                    className='github-card-title-icon-link'
                    src={linkIcon} 
                />
                <span className='github-card-text'>Connected to <b>{user}</b> account</span>

                <ClayButton
                    className='github-card-title-button'
                    size="sm"
                    displayType='secondary'
                >
                    <span>Remove</span>
                </ClayButton>
            </div>
            <div>
                <hr className='github-card-line'></hr> 
            </div>
            <div className='github-card-content github-card-text'>
                <AutoComplete
                    emptyStateMessage=''
                    items={[]}
                    label='Repo' 
                    onChangeQuery={() => {}}
                    onSelectItem={() => {}}
                    query=''
                    required
                >
                    {() => (<div></div>)}
                </AutoComplete>
                <AutoComplete
                    emptyStateMessage=''
                    items={[]}
                    label='Branch' 
                    onChangeQuery={() => {}}
                    onSelectItem={() => {}}
                    query=''
                    required
                >
                    {() => (<div></div>)}
                </AutoComplete>
            </div>
        </div>
    );
}