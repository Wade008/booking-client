
import Avatar from '@mui/material/Avatar';



export const pracDetails = [
    {
        id: 1,
        firstname: "Myles",
        lastname: "Burfield",
        role: "Phyiotherapist",
        avatar: <Avatar>MB</Avatar>
    },
    {
        id: 2,
        firstname: "Campbell",
        lastname: "Antonio",
        role: "Physiotherapist",
        avatar: <Avatar>CA</Avatar>

    },
    {
        id: 3,
        firstname: "Debra",
        lastname: "Mielke",
        role: "Massage therapist",
        avatar: <Avatar>DM</Avatar>

    }


]

export const displayDetails = [
    {
        id: 1,
        title: "Our Phyiotherapists",
        practitioners: [
            {
                id: 1,
                firstname: "Myles",
                lastname: "Burfield",
                role: "Phyiotherapist",
                avatar: <Avatar>MB</Avatar>
            },
            {
                id: 2,
                firstname: "Campbell",
                lastname: "Antonio",
                role: "Physiotherapist",
                avatar: <Avatar>CA</Avatar>

            }
        ]
    },
    {
        id: 2,
        title: "Our Massage therapist",
        practitioners: [
            {
                id: 3,
                firstname: "Debra",
                lastname: "Mielke",
                role: "Massage therapist",
                avatar: <Avatar>DM</Avatar>

            }
        ]
    }


]