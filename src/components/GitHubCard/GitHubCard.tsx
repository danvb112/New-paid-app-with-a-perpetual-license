import link from '../../assets/icons/link.svg'
import github from '../../assets/icons/github.svg'
import ClayForm, {ClayInput} from '@clayui/form';

import ClayButton from '@clayui/button';

import './GitHubCard.scss';
import AutoComplete from '../AutoComplete';

interface GitHubCard {
    icon?: string;
    selected?: string;
    setSelected?: (value: string) => void
    disabled?: boolean;
    user? : string;
    value?: string;
}

export function GitHubCard({
    //icon,
    selected,
    //setSelected,
    // disabled,
    user,
    value
} : GitHubCard){
    return (
        <div className='github-card-container'>
            <div className='github-card-title'>
                <div className='github-card-title-icon-circle'>
                    <img
                        className='github-card-title-icon-github'
                        src={github}  
                    />
                </div>
                <img 
                    className='github-card-title-icon-link'
                    src={link} 
                />
                <span className='github-card-title-text text'>Connected to <b>{user}</b> account</span>

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
            <ClayForm.Group className='github-card-content'>
                <ClayInput.Group>
                    <ClayInput.GroupItem>
                    <AutoComplete 
                        required
                        label='Repo' 
                        emptyStateMessage='nao achei' 
                        items={[]}
                        onChangeQuery={() => {}}
                        onSelectItem={() => {}}
                        query=''
                    >
                        {() => (<div></div>)}
                    </AutoComplete>
                    </ClayInput.GroupItem>
                    <ClayInput.GroupItem>
                        <AutoComplete
                            required
                            label='Branch' 
                            emptyStateMessage='nao achei' 
                            items={[]}
                            onChangeQuery={() => {}}
                            onSelectItem={() => {}}
                            query=''
                        >
                            {() => (<div></div>)}
                        </AutoComplete>
                    </ClayInput.GroupItem>
                </ClayInput.Group>
            </ClayForm.Group>
        </div>
    );
}