array = File.readlines('test_output.txt').map { |e| "#{e.chomp}," }

file_name = 'test_output3.txt'
File.open(file_name, "a+") do |f|
  f.puts array
end
