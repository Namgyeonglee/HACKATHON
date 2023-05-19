import { Icon } from '@iconify/react';
import { ReactComponent as CircleIcon } from '../../asset/svg/circle.svg';
import './AvailableNft.scss';

type availableNftProps = {
     /**
     * Corresponding NFT information
     */
    nftInfo: any;
    /**
     * Whether NFT is selected
     */
    checked: boolean;
    /**
     * Function to execute when NFT is selected
     */
    checkAction: Function;
    /**
     * Function to execute when NFT selection is removed
     */
    uncheckAction: Function;
}

/**
 * NFT UI Component that can be included in integrated NFT
 */
function AvailableNft({ nftInfo, checked, checkAction, uncheckAction }: availableNftProps) {

    return (
        <div 
            className="available-nft-wrapper"
            id={checked ? "checked" : "unchecked"}
            onClick={()=>checked ? uncheckAction() : checkAction()}
        >
            <img className="available-nft-image" src={nftInfo?.image}/>
            <div className="available-nft-body">
                {
                    checked
                    ? <Icon 
                        className="check-icon"
                        icon="line-md:circle-to-confirm-circle-transition"
                        color="#D2F586"
                    />  
                    : <CircleIcon className="check-icon unchecked"/> 
                }
                <h4 className="available-nft-name eng">{ nftInfo?.nftName }</h4>
                <h6 className="available-nft-reward-length">포함된 혜택 수: { nftInfo?.numberOfRewards }</h6>
            </div>
        </div>
    )
}
export default AvailableNft;