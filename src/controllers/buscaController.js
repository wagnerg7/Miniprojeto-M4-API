export const buscarMaterial = (req, res) => {
    const materialId = req.params.id;
    const materialEncontrado = {
      id: materialId,
      titulo: 'Geografia do Mundo Moderno',
      autor: 'Ana Souza',
      disciplina: 'Geografia'
    };
    res.json({ material: materialEncontrado });
  };