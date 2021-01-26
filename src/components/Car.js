import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        width: 400,
        height: "auto",
        padding: 50,
        paddingBottom: 40
    }

}));

export default function Car(props) {
    const id = parseInt(props.match.params.id)
    const thisCar = cars.find(item => item.id === id)
    console.log(thisCar)
    const carProps = []
    Object.entries(thisCar).forEach(
        ([key, value]) =>
            carProps.push(`${key}: ${value}`)
    );
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="sm" className={classes.container}>
            <Paper elevation={5} className={classes.paper}>
                <h3>{thisCar.Name}</h3>
                <div>
                    {carProps.map((detail, index) => (
                        <Chip key={index} label={detail} />
                    ))}
                </div>
            </Paper>

        </Container >
    )
}
