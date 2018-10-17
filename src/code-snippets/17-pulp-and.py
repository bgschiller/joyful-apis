import pulp
p = pulp.LpProblem('and example', pulp.LpMinimize)

x = pulp.LpVariable('x', cat=pulp.LpBinary)
y = pulp.LpVariable('y', cat=pulp.LpBinary)
x_and_y = pulp.LpVariable('x_and_y', cat=pulp.LpBinary)

# Ensure that x_and_y is constrained to the logical value of "x && y"
model.addConstraint(x_and_y >= x + y - 1)
model.addConstraint(x_and_y <= x)
model.addConstraint(x_and_y <= y)
