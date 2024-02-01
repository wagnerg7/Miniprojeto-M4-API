export const listarMateriais = (req, res) => {
    const disciplina = req.params.disciplina;
    const materiais = [
      { id: 1, titulo: 'Introdução à História', autor: 'João Silva', disciplina: 'História' },
      { id: 2, titulo: 'Álgebra para Iniciantes', autor: 'Maria Oliveira', disciplina: 'Matemática' },
      { id: 3, titulo: 'Química Experimental', autor: 'Carlos Santos', disciplina: 'Química' }
    ];
    res.json({ materiais, disciplina });
  };