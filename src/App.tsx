import { useState } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import UserTable from "./components/UserTable";
import MessageModal from "./components/MessageModal";
import { User } from "./types";

function App() {
  const [users] = useState<User[]>([
    {
      id: 1,
      nombre: "Ana García",
      email: "ana@gmail.com",
      telefono: "9876543621",
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      email: "carlos@gmail.com",
      telefono: "9856231478",
    },
    {
      id: 3,
      nombre: "Elena Martínez",
      email: "elena@gmail.com",
      telefono: "932165487",
    },
    {
      id: 4,
      nombre: "Javier López",
      email: "javier@gmail.com",
      telefono: "988888888",
    },
    {
      id: 5,
      nombre: "María Sánchez",
      email: "maria@gmail.com",
      telefono: "912345678",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h4" component="h1" className="mb-6">
        Usuarios
      </Typography>

      <Paper elevation={3} className="p-6">
        <Box className="mb-6">
          <Typography variant="h5" component="h2" className="mb-4">
            Listado de Usuarios
          </Typography>
          <UserTable users={users} onSendMessage={handleOpenModal} />
        </Box>
      </Paper>

      {selectedUser && (
        <MessageModal
          open={modalOpen}
          onClose={handleCloseModal}
          user={selectedUser}
        />
      )}
    </Container>
  );
}

export default App;
