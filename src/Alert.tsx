import React from 'react'

type AlertProps = {
    msg: string,
    type?: string
}

export const Alert: React.SFC<AlertProps> = (props) => (
    <div className={`alert alert-${props.type}`} role="alert" data-testid="alert">
        {props.msg}
    </div>
)


Alert.defaultProps = {
    type: 'default'
}