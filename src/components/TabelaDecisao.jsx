import { REGRAS } from "../data/regras";
import { rotulo } from "../utils/decisao.js";
import "../styles/TabelaDecisao.css";

export default function TabelaDecisao({ ativa }) {
  return (
    <div className="tabela-wrap">
      <table>
        <thead>
          <tr>
            <th>Regra</th>
            <th>Assento ocupado?</th>
            <th>É estudante?</th>
            <th>Idade ≤ 10?</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {REGRAS.map((r) => (
            <tr key={r.id} className={ativa?.id === r.id ? "linha-ativa" : ""}>
              <td>{r.id}</td>
              <td>{rotulo(r.ocupado)}</td>
              <td>{rotulo(r.estudante)}</td>
              <td>{rotulo(r.crianca)}</td>
              <td>{r.preco ? `${r.acao} (R$ ${r.preco})` : r.acao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
