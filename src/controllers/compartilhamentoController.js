export const compartilharMaterial = (req, res) => {
    const novoMaterial = req.body;

    const materialSalvo = { ...novoMaterial, id: 4 };
    res.json({ mensagem: 'Material compartilhado com sucesso!', material: materialSalvo });
  };