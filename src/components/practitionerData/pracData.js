
import Avatar from '@mui/material/Avatar';


export const displayDetails = [
    {
        id: 1,
        title: "Our Phyiotherapists",
        practitioners: [
            {
                id: "1a",
                firstname: "Myles",
                lastname: "Burfield",
                role: "Phyiotherapist",
                avatar: <Avatar>MB</Avatar>,
                cliniko_id: "cliniko-93085526",
                source: "https://sports-and-exercise-physiotherapy.au3.cliniko.com/bookings?business_id=1000889477293415934&practitioner_id=943610693033139751&embedded=true"
            },
            {
                id: "1b",
                firstname: "Campbell",
                lastname: "Antonio",
                role: "Physiotherapist",
                avatar: <Avatar>CA</Avatar>,
                cliniko_id: "cliniko-93085526",
                source: "https://sports-and-exercise-physiotherapy.au3.cliniko.com/bookings?business_id=1000889477293415934&practitioner_id=1043680863335751617&embedded=true"

            }
        ]
    },
    {
        id: 2,
        title: "Our Massage therapist",
        practitioners: [
            {
                id: "2a",
                firstname: "Debra",
                lastname: "Mielke",
                role: "Massage therapist",
                avatar: <Avatar>DM</Avatar>,
                cliniko_id: "cliniko-81950961",
                source: "https://excelr8.cliniko.com/bookings?business_id=1110366787511256623&practitioner_id=104018&embedded=true"

            }
        ]
    }


]