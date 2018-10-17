import citrus
p = citrus.Problem('and example', pulp.LpMinimize)

x = p.make_var('x', cat=pulp.LpBinary)
y = p.make_var('y', cat=pulp.LpBinary)

x_and_y = x & y
# alternatively, x_and_y = citrus.logical_and(x, y)