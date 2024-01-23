import math

def num_bits(n):
  return math.floor(math.log(n, 2)) + 1

def random_int(max):
  bits = ''
  for x in range(num_bits(max)):
    q = QuantumRegister(1)
    c = ClassicalRegister(1)
    qc = QuantumCircuit(q, c)

    qc.h(q[0])
    qc.measure(q, c)

    job_sim = execute(qc, "local_qasm_simulator", shots=1)
    sim_result = job_sim.result()
    counts = sim_result.get_counts(qc)

    bits += bit_from_counts(counts)
  return int(bits, 2)