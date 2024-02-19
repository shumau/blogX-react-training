import { AccountContainer } from "../../components/styled/Containers";
import { TitleH3 } from "../../components/styled/Typography";
import { AccountInfo, AccountItem } from "./styled/Account.styled";

const Account = () => {
    return (
        <AccountContainer>  
            <TitleH3>John Doe</TitleH3>
            <AccountInfo>
                <AccountItem>
                    <span>username: </span>
                    <span>johndoe</span>
                </AccountItem>
                <AccountItem>
                    <span>birth date: </span>
                    <span>1973-01-22</span>
                </AccountItem>
                <AccountItem>
                    <span>email: </span>
                    <span>johndoe@example.com</span>
                </AccountItem>
                <AccountItem>
                    <span>address: </span>
                    <AccountInfo>
                        <AccountItem>
                            <span>street: </span>
                            <span>123 Main Street</span>
                        </AccountItem>       
                        <AccountItem>
                            <span>suite: </span>
                            <span>Apt. 4</span>
                        </AccountItem>  
                        <AccountItem>
                            <span>city: </span>
                            <span>Anytown</span>
                        </AccountItem>  
                    </AccountInfo>
                </AccountItem>
                <AccountItem>
                    <span>phone: </span>
                    <span>(555) 555-1234</span>
                </AccountItem>
                <AccountItem>
                    <span>website: </span>
                    <span>www.johndoe.com</span>
                </AccountItem>
                <AccountItem>
                    <span>company: </span>
                    <AccountInfo>
                        <AccountItem>
                            <span>name: </span>
                            <span>ABC Company</span>
                        </AccountItem>       
                        <AccountItem>
                            <span>catch phrase: </span>
                            <span>Innovative solutions for all your needs</span>
                        </AccountItem>  
                        <AccountItem>
                            <span>bs: </span>
                            <span>Marketing</span>
                        </AccountItem>  
                    </AccountInfo>
                </AccountItem>
            </AccountInfo>
        </AccountContainer>
    );
}


export default Account;