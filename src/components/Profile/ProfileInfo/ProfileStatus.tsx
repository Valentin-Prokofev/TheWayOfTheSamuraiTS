import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatusProfile: (status: string) => void
}

// export const ProfileStatus = (props:ProfileStatusPropsType) => {
//     return (
//         <>
//             <div>
//                 <span>{props.status}</span>
//             </div>
//             <div>
//                 <input value={props.status}/>
//             </div>
//         </>
//     );
// };
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status)
    }

    onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChangeHandler}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                }
            </>
        );
    }

};



