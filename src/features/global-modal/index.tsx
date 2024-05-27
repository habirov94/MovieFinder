import styled from "styled-components";
import {useUnit} from "effector-react/compat";
import {Box, IconButton, Modal} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {$modalData, deleteModal} from "./model";

export const GlobalModal = () => {

    const modalData = useUnit($modalData)

    return (
        <>
            {
                modalData.map((data) => (
                    <Modal
                        key={data.key}
                        open={true}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <GlobalModalWrapper>
                            <Box className="modal-content" sx={{marginRight: 0.5, my: 5}}>
                                <IconButton className="close-button" color="primary" aria-label="add to shopping cart" onClick={() => deleteModal(data.key)}>
                                    <CloseIcon />
                                </IconButton>
                                <div className="content">
                                    {data.content}
                                </div>
                            </Box>
                        </GlobalModalWrapper>
                    </Modal>
                ))
            }
        </>
    )
}

const GlobalModalWrapper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .modal-content {
        padding: 1rem;
        margin: 0;
        border: 1px solid rgba(34, 60, 80, 0.2);
        border-radius: 5px;
        box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
        background-color: white;
    }
    
    .content {
        margin-top: 1rem;
    }

    .close-button {
        position: absolute;
        top: 0.2rem;
        right: 0.2rem;
    }
`