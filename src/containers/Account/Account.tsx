import { useSelector } from "react-redux";
import { AccountContainer } from "../../components/styled/Containers";
import { TitleH3 } from "../../components/styled/Typography";
import { AccountInfo, AccountItem } from "./styled/Account.styled";
import { getUser } from "../../state/selectors/user.selectors";
import { User } from "../../types/user.types";

const Account = () => {
    const user: User | {} = useSelector(getUser)

    return (
        <AccountContainer>  
            <TitleH3>{(user as User)?.firstname} {(user as User)?.lastname}</TitleH3>
            <AccountInfo>
                <AccountItem>
                    <span>username: </span>
                    <span>{(user as User)?.login?.username}</span>
                </AccountItem>
                <AccountItem>
                    <span>birth date: </span>
                    <span>{(user as User)?.birthDate}</span>
                </AccountItem>
                <AccountItem>
                    <span>email: </span>
                    <span>{(user as User)?.email}</span>
                </AccountItem>
                <AccountItem>
                    <span>address: </span>
                    <AccountInfo>
                        <AccountItem>
                            <span>street: </span>
                            <span>{(user as User)?.address?.street}</span>
                        </AccountItem>       
                        <AccountItem>
                            <span>suite: </span>
                            <span>{(user as User)?.address?.suite}</span>
                        </AccountItem>  
                        <AccountItem>
                            <span>city: </span>
                            <span>{(user as User)?.address?.city}</span>
                        </AccountItem>  
                    </AccountInfo>
                </AccountItem>
                <AccountItem>
                    <span>phone: </span>
                    <span>{(user as User)?.phone}</span>
                </AccountItem>
                <AccountItem>
                    <span>website: </span>
                    <span>{(user as User)?.website}</span>
                </AccountItem>
                <AccountItem>
                    <span>company: </span>
                    <AccountInfo>
                        <AccountItem>
                            <span>name: </span>
                            <span>{(user as User)?.company?.name}</span>
                        </AccountItem>       
                        <AccountItem>
                            <span>catch phrase: </span>
                            <span>{(user as User)?.company?.catchPhrase}</span>
                        </AccountItem>  
                        <AccountItem>
                            <span>bs: </span>
                            <span>{(user as User)?.company?.bs}</span>
                        </AccountItem>  
                    </AccountInfo>
                </AccountItem>
            </AccountInfo>
        </AccountContainer>
    );
}


export default Account;