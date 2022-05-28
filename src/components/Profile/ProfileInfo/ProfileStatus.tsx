import React from 'react';

type ProfileStatusPropsType = {
    status: string
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
        editMode: false
    }
    activateEditMode () {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </>
        );
    }

};



