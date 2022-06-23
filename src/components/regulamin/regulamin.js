
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import React, {useState} from "react";

const Regulamin = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Regulamin
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Regulamin wniosku</Modal.Title>
                </Modal.Header>
                <Modal.Body> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet assumenda at beatae, deserunt dolorem eius iusto minus necessitatibus odit, officiis quasi repellat temporibus, veritatis voluptate! Culpa deserunt dolor laudantium.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zamknij
                    </Button>

                </Modal.Footer>
            </Modal>
        </>

    )
}


export default Regulamin;