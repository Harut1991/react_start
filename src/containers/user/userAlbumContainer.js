import React from 'react';
import SingleUser from "../../components/single-user/singleUser";

type Props = {|
    data: Array<{
        id: number,
        name: string,
        email: string,
        phone: string,
        company: {
            name: string
        }
    }>
|};

function UserContainer(props: Props) {
    return (
        <ul>
            {props.data.map((res, index) => {
                return (
                    <li key={index}>
                        <SingleUser {...res} />
                        <UserAlbumContainer />
                    </li>
                )
            })}
        </ul>
    )

}
export default UserContainer;
